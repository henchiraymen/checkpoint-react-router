import React from "react";
import "./MovieList.css";
import MovieCard from "../movieCard/MovieCard";

const MovieList = ({ movies, title, ratingValue }) => {
  return (
    <div className="movieList">
      {movies
        .filter(
          (movie) =>
            movie.title.toUpperCase().includes(title.toUpperCase()) &&
            movie.rating >= ratingValue
        )
        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default MovieList;
