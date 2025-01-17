import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const UpcomingMoviesPage = () => {
  const { upcomingMovies } = useContext(AppContext);

  // Extract the minimum and maximum dates from the data
  const { minimum, maximum } = upcomingMovies.dates || {};

  return (
    <div className="container mx-auto p-4">
      {/* Heading with date range */}
      {minimum && maximum && (
        <h1 className="text-2xl font-semibold text-gray-200 mb-6">
          Upcoming Movies from {minimum} to {maximum}
        </h1>
      )}

      {/* Movie grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
        {upcomingMovies.results?.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            className="overflow-hidden"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-96 rounded-lg object-cover object-center"
            />
            <div className="py-1 px-2">
              <h2 className="text-lg text-gray-200 font-bold mb-1">
                {movie.title}
              </h2>
              <p className="text-gray-300">
                <span className="font-bold">Rating: </span>
                {movie.vote_average}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMoviesPage;