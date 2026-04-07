import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import "./App.css";
import MoviePopup from "./components/moviepopup";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

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
    <div className="app">
      <div className="header">
        <h1>🎬 Movie Explorer</h1>

        <p>Search your favourite movies</p>
      </div>

      <SearchBar searchMovies={searchMovies} />

      <MovieList movies={movies} setSelectedMovie={setSelectedMovie} />

      {selectedMovie && (
        <MoviePopup
          movie={selectedMovie}
          close={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default App;
