import { useEffect, useState } from "react";

function MovieCard({ movie, setSelectedMovie }) {
  const [rating, setRating] = useState("");

  const API_KEY = "90e197fd";

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`)
      .then((res) => res.json())

      .then((data) => {
        setRating(data.imdbRating);
      });
  }, [movie]);

  return (
    <div className="card" onClick={() => setSelectedMovie(movie)}>
      <img src={movie.Poster} alt={movie.Title} />

      <h3>{movie.Title}</h3>

      <p>{movie.Year}</p>

      <span className="rating">⭐ {rating}</span>
    </div>
  );
}

export default MovieCard;
