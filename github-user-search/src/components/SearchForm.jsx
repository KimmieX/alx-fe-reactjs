<form className="flex flex-col md:flex-row gap-4 p-4 bg-white shadow-md rounded">
  <input
    type="text"
    placeholder="Username"
    className="input input-bordered w-full"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
  />
  <input
    type="text"
    placeholder="Location"
    className="input input-bordered w-full"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
  />
  <input
    type="number"
    placeholder="Min Repos"
    className="input input-bordered w-full"
    value={minRepos}
    onChange={(e) => setMinRepos(e.target.value)}
  />
  <button type="submit" className="btn btn-primary w-full md:w-auto">
    Search
  </button>
</form>