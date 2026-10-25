import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/";

export async function fetchMovies(query: string) {
  const responce = await axios.get("3/search/movie", {
    params: { query: query },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjM3NDUwM2EwYjhkZGJiY2IzNDAwMjZkYmM2NzNhNSIsIm5iZiI6MTc3MTAwNDk4Mi45NzcsInN1YiI6IjY5OGY2NDM2MzExMTZiNWQyYzgzZWRkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KEFzdQeBWK3UfZDyAAAiAkX6MLB7ha3bWfplrpWk5g",
    },
  });
  return responce.data;
}
