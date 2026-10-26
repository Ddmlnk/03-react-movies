import axios from "axios";
import type { MoviesResponse } from "../types/movie";

axios.defaults.baseURL = "https://api.themoviedb.org/";

export async function fetchMovies(query: string): Promise<MoviesResponse> {
  const response = await axios.get<MoviesResponse>("3/search/movie", {
    params: { query: query },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjM3NDUwM2EwYjhkZGJiY2IzNDAwMjZkYmM2NzNhNSIsIm5iZiI6MTc3MTAwNDk4Mi45NzcsInN1YiI6IjY5OGY2NDM2MzExMTZiNWQyYzgzZWRkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KEFzdQeBWK3UfZDyAAAiAkX6MLB7ha3bWfplrpWk5g",
    },
  });
  return response.data;
}
