import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TopRatedPage from "./pages/TopRatedPage";
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";
import SingleMovieDetailPage from "./pages/SingleMovieDetailPage";
import Navbar from "./componets/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-700 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/top-rated-movies" element={<TopRatedPage />} />
          <Route path="/upcoming-movies" element={<UpcomingMoviesPage />} />
          <Route path="/movie/:id" element={<SingleMovieDetailPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
