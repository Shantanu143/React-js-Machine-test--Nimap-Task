# Movie Web Panel

A **Movie Web Panel** built using **React.js** that allows users to explore popular, top-rated, and upcoming movies. It integrates with the **The Movie Database (TMDb)** API to fetch movie data and features several pages, including detailed movie pages and a global search functionality.

This project is fully responsive and styled using CSS, ensuring an enjoyable user experience across all devices.

---

## Features

- **Home Page**: Displays popular movies fetched from the TMDb API.
- **Top-Rated Movies**: Lists the highest-rated movies.
- **Upcoming Movies**: Showcases movies that will be released soon.
- **Single Movie Detail Page**: Provides detailed information about a selected movie, including its cast.
- **Search Functionality**: Users can search for movies by name, with results displayed in a similar layout to the home page.
- **Pagination**: Enables easy navigation between multiple pages of movie data.

---

## Demo

- [Live Project](https://reactjsmoviewebpanel.netlify.app/) - Access the live version of the project.
- [CodeSandbox Repository](https://codesandbox.io/p/github/Shantanu143/React-js-Machine-test--Nimap-Task/main) - Preview and live deployment on CodeSandbox.
- [GitHub Repository](https://github.com/Shantanu143/React-js-Machine-test--Nimap-Task) - View and contribute to the source code.

---

## API Integration

This project integrates with **The Movie Database (TMDb)** API to fetch movie data.

## API Endpoints

This project integrates with **The Movie Database (TMDb)** API to fetch movie data. Below are the key endpoints used in the project along with example API calls and explanations.

### **Base URL**

The base URL for all requests is:
https://api.themoviedb.org/3

You will need to append the relevant endpoint and include your **API Key** in the query string as `{API_KEY}`.

### 1. **Popular Movies**

This endpoint fetches a list of popular movies.

**Endpoint**:
GET /movie/popular?api_key={API_KEY}&language=en-US&page=1

- **Response**: A list of popular movies with details like title, release date, poster image, etc.
- **Parameters**:
  - `api_key` (required): Your **TMDb API key**.
  - `language` (optional): The language in which movie data should be returned (default is `en-US`).
  - `page` (optional): The page number for paginated results (default is `1`).

**Example Request**:
https://api.themoviedb.org/3/movie/popular?api_key=your_api_key&language=en-US&page=1

### 2. **Movie Details**

This endpoint provides detailed information about a specific movie by its ID.

**Endpoint**:
GET /movie/{movie_id}?api_key={API_KEY}&language=en-US

- **Response**: Detailed information about the movie, including title, overview, release date, genre, etc.
- **Parameters**:
  - `movie_id` (required): The ID of the movie you want to fetch details for.
  - `api_key` (required): Your **TMDb API key**.
  - `language` (optional): The language in which movie data should be returned (default is `en-US`).

**Example Request**:
https://api.themoviedb.org/3/movie/550?api_key=your_api_key&language=en-US

### 3. **Movie Cast**

Fetches the cast of a movie by its ID.

**Endpoint**:
GET /movie/{movie_id}/credits?api_key={API_KEY}&language=en-US

- **Response**: Information about the cast and crew of the movie, including actor names, character names, and other related details.
- **Parameters**:
  - `movie_id` (required): The ID of the movie you want to fetch the cast for.
  - `api_key` (required): Your **TMDb API key**.
  - `language` (optional): The language in which the cast information should be returned (default is `en-US`).

**Example Request**:
https://api.themoviedb.org/3/movie/550/credits?api_key=your_api_key&language=en-US

### 4. **Top-Rated Movies**

This endpoint retrieves the top-rated movies.

**Endpoint**:
GET /movie/top_rated?api_key={API_KEY}&language=en-US&page=1

- **Response**: A list of top-rated movies with details like title, release date, rating, and poster images.
- **Parameters**:
  - `api_key` (required): Your **TMDb API key**.
  - `language` (optional): The language in which movie data should be returned (default is `en-US`).
  - `page` (optional): The page number for paginated results (default is `1`).

**Example Request**:
https://api.themoviedb.org/3/movie/top_rated?api_key=your_api_key&language=en-US&page=1

### 5. **Upcoming Movies**

This endpoint retrieves a list of upcoming movies.

**Endpoint**:
GET /movie/upcoming?api_key={API_KEY}&language=en-US&page=1

- **Response**: A list of upcoming movies with details such as release date, title, and poster images.
- **Parameters**:
  - `api_key` (required): Your **TMDb API key**.
  - `language` (optional): The language in which movie data should be returned (default is `en-US`).
  - `page` (optional): The page number for paginated results (default is `1`).

**Example Request**:
https://api.themoviedb.org/3/movie/upcoming?api_key=your_api_key&language=en-US&page=1

### 6. **Search Movies**

This endpoint allows users to search for movies by name.

**Endpoint**:
GET /search/movie?api_key={API_KEY}&language=en-US&query={movie_name}&page=1

- **Response**: A list of movies matching the search query with details like title, release date, and poster images.
- **Parameters**:
  - `api_key` (required): Your **TMDb API key**.
  - `language` (optional): The language in which movie data should be returned (default is `en-US`).
  - `query` (required): The movie name or keywords to search for.
  - `page` (optional): The page number for paginated results (default is `1`).

**Example Request**:
https://api.themoviedb.org/3/search/movie?api_key=your_api_key&language=en-US&query=inception&page=1
