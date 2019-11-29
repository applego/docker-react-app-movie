import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
//   DEFAULT_PLACEHOLDER_IMAGE is because some movies retrieved from the API do not have images, so we will render a placeholder image instead of a broken link.

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};


export default Movie;

// This requires more of an explanation, but it’s also just a presentational component (it doesn’t have any internal state) that renders the movie title, image, and year. The reason for the DEFAULT_PLACEHOLDER_IMAGE is because some movies retrieved from the API do not have images, so we will render a placeholder image instead of a broken link.

// Now we will create the Search component. This part is exciting because in the past, in order to handle internal state, we would have to create a class component…but not anymore! Because with hooks we can have a functional component handle its own internal state. Let’s create a file named Search.js and in that file, we will add the following code: