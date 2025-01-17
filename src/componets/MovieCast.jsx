/* eslint-disable react/prop-types */
const MovieCast = ({ movieCast }) => {
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="mx-5 mb-4 text-white text-5xl font-bold">Movie Cast</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {movieCast.map((cast) => (
          <div key={cast.id} className="overflow-hidden ">
            <img
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt={cast.title}
              className="w-full h-96 rounded-lg object-cover object-center"
            />
            <div className="py-1 px-2">
              <h2 className="text-lg text-gray-200 font-bold mb-1">
                {cast.original_name}
              </h2>
              <p className="text-gray-300">
                <span className="font-bold">Character </span>
                {cast.character}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCast;
