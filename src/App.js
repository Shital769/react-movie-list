import { useState } from "react";
import { Container } from "react-bootstrap";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import { MovieList } from "./components/MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const addMovieToList = (movieObj) => {
    const newArg = movies.filter((item) => item.imdbID !== movieObj.imdbID);

    setMovies([...newArg, movieObj]);
  };

  const handleOnDelete = (id) => {
    if (window.confirm(" Are youy sure you want to delete this movie?")) {
      setMovies(movies.filter((item) => item.imdbID !== id));
    }
  };

  return (
    <div className="wrapper">
      <Container>
        {/* Title */}
        <Title />
        {/* Form */}
        <SearchForm addMovieToList={addMovieToList} />
        {/* Movie List  */}
        <MovieList movies={movies} handleOnDelete={handleOnDelete} />
      </Container>
    </div>
  );
}

export default App;
