import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const {
    movieName,
    setMovieName,
    searchMovies,
  } = useContext(AppContext);
  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    setMovieName(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(movieName);
    navigate("/search");
  };

  return (
    <header className="text-gray-400 bg-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-0 md:ml-3 text-white font-bold text-xl">
            MovieDb
          </span>
        </Link>

        <nav className="md:flex flex-col md:flex-row md:ml-auto items-center text-base justify-center text-center w-full md:w-auto">
          <Link to="/" className="mr-5 hover:text-gray-100">
            Popular
          </Link>
          <Link to="/top-rated-movies" className="mr-5 hover:text-gray-100">
            Top Rated
          </Link>
          <Link to="/upcoming-movies" className="mr-5 hover:text-gray-100">
            Upcoming
          </Link>
        </nav>

        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <input
            type="text"
            id="search"
            name="movieName"
            value={movieName}
            onChange={handleInputChange}
            className="flex-1 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-300 text-base outline-none text-gray-700 py-2 px-4 transition-colors duration-200 ease-in-out"
            placeholder="Search for a movie..."
          />
          <button
            className="bg-gray-500 text-white py-2 px-6 rounded hover:bg-gray-400 focus:outline-none text-base"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
