import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await api.get("/movie/now_playing");
      setMovies(response.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Films Récents</h1>
      <div className="movies-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
              <p>Note : {movie.vote_average}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
