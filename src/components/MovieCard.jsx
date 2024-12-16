import React from "react";

const MovieCard = ({ movie }) => {
  const { title, vote_average, poster_path } = movie;

  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <h3>{title}</h3>
      <p>Rating: {vote_average}</p>
    </div>
  );
};

export default MovieCard;
