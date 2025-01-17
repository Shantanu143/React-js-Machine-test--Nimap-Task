import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

import HeroSection from "../componets/HeroSection";
import MovieCast from "../componets/MovieCast";

const SingleMovieDetailPage = () => {
  const { id } = useParams();
  const { setMovieId, movie, movieCast } = useContext(AppContext);
 
  useEffect(() => {
    setMovieId(id);
  }, [id]);

  return (
    <>
      {movie && movieCast ? (
        <div>
          <HeroSection movie={movie} />
          <MovieCast movieCast={movieCast} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default SingleMovieDetailPage;
