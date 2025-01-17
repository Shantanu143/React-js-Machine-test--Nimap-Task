import axios from "axios";
import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const BackendUrl = "https://api.themoviedb.org";

  const [movies, getMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const getAllMovies = async () => {
    try {
      const { data } = await axios.get(
        `${BackendUrl}/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`
      );
      getMovies(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUpcomingMovies = async () => {
    try {
      const { data } = await axios.get(
        `${BackendUrl}/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`
      );
      console.log(data);
      setUpcomingMovies(data);
    } catch (error) {
      console.error("Error fetching upcoming movie data:", error.message);
    }
  };

  getUpcomingMovies();
  const value = {
    getAllMovies,
    movies,
    Api_key,
    BackendUrl,
    upcomingMovies,
  };
  return (
    // eslint-disable-next-line react/prop-types
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
