import css from "./App.module.css";
import { useCallback, useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies } from "../../services/movieService";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import toast from "react-hot-toast";
import { createPortal } from "react-dom";
import MovieModal from "../MovieModal/MovieModal";
import type { Movie } from "../../types/movie";

const notify = () => toast("No movies found for your request.");

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (!query) return;

    async function searchMovies() {
      try {
        setIsLoading(true);
        setIsError(false);
        const result = await fetchMovies(query);
        setMovies(result.results);
      } catch (error) {
        setIsError(true);
        console.log("error loading movies by query", error);
        notify();
      } finally {
        setIsLoading(false);
      }
    }

    searchMovies();
  }, [query]);

  function handleSelect(movie: Movie) {
    setSelectedMovie(movie);
  }
  const handleClose = useCallback(() => {
    setSelectedMovie(null);
  }, []);
  return (
    <div className={css.app}>
      <SearchBar onSubmit={setQuery} />

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {!isLoading && !isError && (
        <MovieGrid moviesList={movies} onSelect={handleSelect} />
      )}

      {selectedMovie &&
        createPortal(
          <MovieModal movie={selectedMovie} onClose={handleClose} />,
          document.body,
        )}
    </div>
  );
}
