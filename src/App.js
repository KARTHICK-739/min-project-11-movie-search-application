import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "90e197fd";

  const searchMovies = async (title) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`,
      );

      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError("Movie not found");
      }
    } catch {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Movie Search App</h1>

      <SearchBar searchMovies={searchMovies} />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <MovieList movies={movies} />
    </div>
  );
}

export default App;
