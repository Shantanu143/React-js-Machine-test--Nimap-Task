/* eslint-disable react/prop-types */
const HeroSection = ({ movie }) => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div
        className="relative bg-cover bg-center rounded-lg shadow-lg"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start px-6 py-6 space-y-6 md:space-y-0">
          <div className="md:w-1/2 w-full flex-shrink-0">
            <div className="flex flex-col md:flex-row items-center justify-start">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg w-44 h-auto object-cover shadow-lg mb-6 md:mb-0 md:w-1/3"
              />
              <div className="mx-4 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-100 mb-4">
                  {movie.title}
                </h1>
                <p className="text-lg md:text-xl font-semibold text-blue-300 italic mb-6">
                  <span className="font-semibold">Rating:</span>{" "}
                  {movie.vote_average} / 10
                </p>

                <div className="text-gray-300 text-sm space-y-2">
                  <p>
                    {movie.runtime} min{" "}
                    <span className="ml-2 font-semibold">
                      {movie.genres?.map((genre, index) => (
                        <span key={genre.id} className="text-blue-300">
                          {genre.name}
                          {index < movie.genres.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </span>{" "}
                  </p>

                  <p>
                    <span className="font-semibold">Release Date :</span>{" "}
                    {movie.release_date}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center md:text-left my-2">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-100 mb-1">
                Overview
              </h1>
              <p className="text-gray-300 mb-6">{movie.overview}</p>
            </div>

            {/* Right Side: Movie Details (Empty for now) */}
            <div className="w-full text-left"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
