import { useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchGitHubUser } from './services/githubAPI';

function App() {
  const [userData, setUserData] = useState(null);

  const handleSearch = async (username) => {
    try {
      const data = await fetchGitHubUser(username);
      setUserData(data);
    } catch (error) {
      setUserData(null);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt={userData.login} width={100} />
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
