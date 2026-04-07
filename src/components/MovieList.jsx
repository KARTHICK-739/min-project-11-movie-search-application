import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
