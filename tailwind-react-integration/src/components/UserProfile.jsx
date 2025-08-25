function UserProfile() {
  return (
    <div className="bg-gray-100 sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        className="w-24 h-24 rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
      />

      <h1 className="sm:text-lg md:text-xl text-blue-800 my-4 text-center font-semibold">
        John Doe
      </h1>
      <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
        {user.name || user.login}
      </h2>

      <p className="sm:text-sm md:text-base text-gray-600 text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;