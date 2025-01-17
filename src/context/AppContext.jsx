import axios from "axios";
import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const backendUrl = "https://api.themoviedb.org";

  const [movies, getMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const getAllMovies = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`
      );
      getMovies(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUpcomingMovies = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`
      );
      setUpComingMovies(data);
    } catch (error) {
      console.error("Error fetching upcoming movie data:", error.message);
    }
  };

  const getTopRatedMovies = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`
      );
      setTopRatedMovies(data.results);
    } catch (error) {
      console.error("Get Top Rated Movies Error : " + error.message);
    }
  };

  const value = {
    getAllMovies,
    movies,
    Api_key,
    backendUrl,
    upComingMovies,
    getUpcomingMovies,
    getTopRatedMovies,
    topRatedMovies,
  };
  return (
    // eslint-disable-next-line react/prop-types
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
