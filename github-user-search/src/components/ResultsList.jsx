<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  {users.map((user) => (
    <li key={user.id} className="card bg-base-100 shadow-md p-4">
      <div className="flex items-center gap-4">
        <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
        <div>
          <h2 className="text-lg font-bold">{user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            View Profile
          </a>
        </div>
      </div>
    </li>
  ))}
</ul>