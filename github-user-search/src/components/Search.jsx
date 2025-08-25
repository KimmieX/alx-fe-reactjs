import React, {useState } from 'react';

// src/components/Search.jsx
import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`
      );
      const data = await response.json();
      setUsers(data.items || []);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search GitHub users"
      />
      <button onClick={fetchUserData}>Search</button>

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}

const Search = ({ onSearch, users, loading, error }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };


  
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">Looks like we cant find the user</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mx-auto" />
            <h2 className="text-center mt-2 font-semibold">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-blue-600 mt-2"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;