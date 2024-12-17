import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import api from "../api";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await api.get(`/movie/${id}`);
      setMovie(response.data);
    };

    const fetchMovieTrailer = async () => {
      const response = await api.get(`/movie/${id}/videos`);
      const trailer = response.data.results.find(
        (video) => video.type === "Trailer"
      );
      if (trailer) setTrailerKey(trailer.key);
    };

    fetchMovieDetails();
    fetchMovieTrailer();
  }, [id]);

  if (!movie) return <p>Chargement...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Note : {movie.vote_average}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>

      {/* Trailer du film */}
      {trailerKey && (
        <div>
          <h2>Bande-annonce</h2>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailerKey}`}
            controls={true}
          />
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
