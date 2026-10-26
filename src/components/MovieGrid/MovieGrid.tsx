import type { Movie } from "../../types/movie";
import css from "./MovieGrid.module.css";

interface MovieGridProps {
  moviesList: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieGrid({ moviesList, onSelect }: MovieGridProps) {
  console.log("moviesList: ", moviesList);
  return (
    <ul className={css.grid}>
      {moviesList.map((el) => (
        <li key={el.id}>
          <div
            className={css.card}
            onClick={() => {
              onSelect(el);
            }}
          >
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
              alt={`${el.title}`}
              loading="lazy"
            />
            <h2 className={css.title}>{el.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
