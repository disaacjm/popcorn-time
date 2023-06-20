import { useState } from "react";
import movies from "../data/movies.json";

import "./Main.css";

function Main() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    // console.log("deleting movie with id....", movieId)

    // moviesToDisplay.push(); // NEVER MODIFY STATE DIRECTLY !

    const newList = moviesToDisplay.filter((element) => {
      return element.id !== movieId;
    });

    setMoviesToDisplay(newList);
  };

  // Conditional Rendering: option A (Element Variables)
  let message = "";
  if (moviesToDisplay.length > 0) {
    message = <h1>Number of movies: {moviesToDisplay.length}</h1>;
  } else {
    message = <h1>Sorry, no movies to display</h1>;
  }

  return (
    <div className="Main">
            {message}

      {moviesToDisplay.map((movie) => (
        <div key={movie.id} className="card">
          <h3>{movie.title}</h3>
          <p>Year: {movie.year} </p>
          <p>
            Genre:{" "}
            {Array.isArray(movie.genres)
              ? movie.genres.join(", ")
              : movie.genres}
          </p>
          <img src={movie.imgURL} alt="movie image" />
          <p>Rating: {movie.rating}</p>
          { movie.rating > 8 && <p>RECOMMENDED</p>}
          <button
            onClick={() => {
              deleteMovie(movie.id);
            }}
          >
            Delete this movie
          </button>
        </div>
      ))}
    </div>
  );
}

export default Main;
