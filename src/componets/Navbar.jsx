import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Popular", link: "/" },
    { name: "Top Rated", link: "/top-rated-movies" },
    { name: "Upcoming", link: "/upcoming-movies" },
  ];

  return (
    <header className="text-gray-400 bg-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo */}
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-0 md:ml-3 text-white font-bold text-xl">
            MovieDb
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="md:flex flex-col md:flex-row md:ml-auto items-center text-base justify-center text-center w-full md:w-auto">
          {navLinks.map((data, index) => (
            <Link
              key={index}
              to={data.link}
              className="mr-5 hover:text-gray-100"
            >
              {data.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <input
            type="text"
            id="search"
            name="movieName"
            className="flex-1 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-300 text-base outline-none text-gray-700 py-2 px-4 transition-colors duration-200 ease-in-out"
            placeholder="Search for a movie..."
          />
          <button className="bg-gray-500 text-white py-2 px-6 rounded hover:bg-gray-400 focus:outline-none text-base">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;