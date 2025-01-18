import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const backendUrl = "https://api.themoviedb.org/3";
  const backendImgUrl = "https://image.tmdb.org/t/p/w500";

  // All movies state
  const [movies, setMovies] = useState([]);

  // upcoming movies state
  const [upComingMovies, setUpComingMovies] = useState([]);

  // Top movies state
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  // single movie states
  const [movieId, setMovieId] = useState(null);
  const [movie, setMovie] = useState(null);
  const [movieCast, setMovieCast] = useState(null);

  // search api states
  const [movieName, setMovieName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // error handling states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async (query) => {
    if (!query) return;
    setMovieName(query);
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `${backendUrl}/search/movie?api_key=${Api_key}&language=en-US&query=${movieName}&page=1`
      );
      setSearchResults(data.results);
    } catch (err) {
      setError("Error fetching data. Please try again.");
      console.error("Error fetching search results:", err);
    } finally {
      setLoading(false);
    }
  };

  const getSingleMovie = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `${backendUrl}/movie/${movieId}?api_key=${Api_key}&language=en-US`
      );
      setMovie(data);
    } catch (error) {
      setError("Error fetching data. Please try again.");
      console.error("Error fetching movie data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const getMovieCast = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `${backendUrl}/movie/${movieId}/credits?api_key=${Api_key}&language=en-US`
      );
      setMovieCast(data.cast);
    } catch (error) {
      setError("Error fetching data. Please try again.");
      console.error("Error fetching movie cast:", error.message);
    } finally {
      setLoading(false);
    }
  };
  const getAllMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `${backendUrl}/movie/popular?api_key=${Api_key}&language=en-US&page=1`
      );
      setMovies(data.results);
    } catch (error) {
      setError("Error fetching data. Please try again.");
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getUpcomingMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `${backendUrl}/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`
      );
      setUpComingMovies(data);
    } catch (error) {
      setError("Error fetching data. Please try again.");
      console.error("Error fetching upcoming movie data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const getTopRatedMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `${backendUrl}/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`
      );
      setTopRatedMovies(data.results);
    } catch (error) {
      setError("Error fetching data. Please try again.");
      console.error("Get Top Rated Movies Error : " + error.message);
    } finally {
      setLoading(false);
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
    movieName,
    setMovieName,
    searchResults,
    loading,
    error,
    searchMovies,
  };
  return (
    // eslint-disable-next-line react/prop-types
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
