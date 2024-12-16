import React, { useEffect, useState } from "react";
import api from "./api";
import MovieCard from "./components/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    api
      .get("/movie/now_playing")
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    api
      .get("/search/movie", { params: { query } })
      .then((response) => setSearchResults(response.data.results))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>TMDB Movie App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="movies-container">
        {(searchResults.length > 0 ? searchResults : movies).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
