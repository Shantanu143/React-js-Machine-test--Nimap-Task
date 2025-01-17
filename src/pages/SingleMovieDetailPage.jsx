import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import HeroSection from "../componets/HeroSection";
import MovieCast from "../componets/MovieCast";

const SingleMovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [movieCast, setMovieCast] = useState(null);

  const { Api_key } = useContext(AppContext);

  const getSingleMovie = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${Api_key}&language=en-US`
      );
      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie data:", error.message);
    }
  };

  const getMovieCast = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Api_key}&language=en-US`
      );
      setMovieCast(data.cast);
    } catch (error) {
      console.error("Error fetching movie cast:", error.message);
    }
  };

  useEffect(() => {
    getMovieCast();
    getSingleMovie();
  }, [id]);

  return (
    <>
      {movie ? (
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
