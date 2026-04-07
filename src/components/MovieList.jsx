import MovieCard from "./MovieCard";
function MovieList({ movies, setSelectedMovie }) {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          setSelectedMovie={setSelectedMovie}
        />
      ))}
    </div>
  );
}
export default MovieList;
