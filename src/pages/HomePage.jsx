import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const HomePage = () => {
  const { movies, getAllMovies } = useContext(AppContext);
  console.log(movies);

  useEffect(() => {
    getAllMovies();
  }, []);
  return (
    <div className="container mx-auto p-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
        {movies.map((card) => (
          <Link key={card.id} to={`/movie/${card}`} className="overflow-hidden ">
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.title}
              className="w-full h-96 rounded-lg object-cover object-center"
            />
            <div className="py-1 px-2">
              <h2 className="text-lg text-gray-200 font-bold mb-1">
                {card.title}
              </h2>
              <p className="text-gray-300">
                <span className="font-bold">Rating: </span>
                {card.vote_average}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
