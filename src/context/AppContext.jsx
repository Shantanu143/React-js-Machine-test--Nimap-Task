import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const backendUrl = "https://api.themoviedb.org/3/movie";
  const backendImgUrl = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const [movieId, setMovieId] = useState(null);
  const [movie, setMovie] = useState(null);
  const [movieCast, setMovieCast] = useState(null);

  const getSingleMovie = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/${movieId}?api_key=${Api_key}&language=en-US`
      );
      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie data:", error.message);
    }
  };

  const getMovieCast = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/${movieId}/credits?api_key=${Api_key}&language=en-US`
      );
      setMovieCast(data.cast);
    } catch (error) {
      console.error("Error fetching movie cast:", error.message);
    }
  };
  const getAllMovies = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/popular?api_key=${Api_key}&language=en-US&page=1`
      );
      setMovies(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUpcomingMovies = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/upcoming?api_key=${Api_key}&language=en-US&page=1`
      );
      setUpComingMovies(data);
    } catch (error) {
      console.error("Error fetching upcoming movie data:", error.message);
    }
  };

  const getTopRatedMovies = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/top_rated?api_key=${Api_key}&language=en-US&page=1`
      );
      setTopRatedMovies(data.results);
    } catch (error) {
      console.error("Get Top Rated Movies Error : " + error.message);
    }
  };

  useEffect(() => {
    if (movieId) {
      getSingleMovie();
      getMovieCast();
    }
  }, [movieId]);

  const value = {
    getAllMovies,
    movies,
    Api_key,
    backendUrl,
    backendImgUrl,
    upComingMovies,
    getUpcomingMovies,
    getTopRatedMovies,
    topRatedMovies,
    setMovieId,
    movie,
    movieCast,
    getMovieCast,
    getSingleMovie,
  };
  return (
    // eslint-disable-next-line react/prop-types
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
