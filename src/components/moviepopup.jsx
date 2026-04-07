import { useEffect, useState } from "react";

function MoviePopup({ movie, close }) {
  const [details, setDetails] = useState({});

  const API_KEY = "90e197fd";

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`)
      .then((res) => res.json())

      .then((data) => setDetails(data));
  }, [movie]);

  return (
    <div className="popup">
      <div className="popupContent">
        <button onClick={close} className="close">
          X
        </button>

        <img src={details.Poster} alt="" />

        <h2>{details.Title}</h2>

        <p>{details.Plot}</p>

        <p>⭐ {details.imdbRating}</p>
      </div>
    </div>
  );
}

export default MoviePopup;
