import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import '../App.css';
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";

const MOVIE_API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=dcf8c644"; // you should replace this with yours(I did it)

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(()=>{
    fetch(MOVIE_API_URL)
    .then(response => response.json())
    .then(jsonResponse => {
      setMovies(jsonResponse.Search);
      setLoading(false);
    });
  }, []);

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=dcf8c644`)
    .then(response => response.json())
    .then(jsonResponse => {
      if(jsonResponse.Response === "True"){
        setMovies(jsonResponse.Search);
        setLoading(false);
      }else{
        setErrorMessage(jsonResponse.Error);
        setLoading(false);
      }
    });
  };

  return (
    <div className="App">
      <Header text="OGAWA HOOKED"/>
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favorite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
