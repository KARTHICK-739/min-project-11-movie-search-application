function MovieCard({ movie }) {
  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} />

      <h3>{movie.Title}</h3>

      <p>{movie.Year}</p>
    </div>
  );
}

export default MovieCard;
