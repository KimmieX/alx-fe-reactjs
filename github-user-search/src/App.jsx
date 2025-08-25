import { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (params) => {
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const results = await fetchUserData(params);
      setUsers(results);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">GitHub User Search</h1>
      <Search
        onSearch={handleSearch}
        users={users}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;