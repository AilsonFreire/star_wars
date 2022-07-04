import { Movie } from "../utils/types";
import api from "./baseURL";

type Response = {
  results: Movie[];
}

export const getStarWarsMovies = async () => {
  try {
    return await api.get<Response>("/films").then(response => response.data.results);
  } catch (error) {
    return 'Error';
  }
}