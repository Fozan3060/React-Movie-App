import { useSuspenseQuery } from '@tanstack/react-query';
import axios from 'axios';

interface MovieDetailsResponse {
  Poster: string;
  Title: string;
  imdbID: string;
  Released: string;
  Runtime: string;
  imdbRating: string;
  Genre: string;
}

const fetchMovieDetails = async (selected: string) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=a3d0635c&i=${selected}`
  );
  return response.data;
};

const useFetchMovieDetailsHook = ({ selected }: { selected: string }) => {
  const { data } = useSuspenseQuery<MovieDetailsResponse>({
    queryKey: ['FetchMovieDetails', selected],
    queryFn: () => fetchMovieDetails(selected),
  });
  return { data };
};

export default useFetchMovieDetailsHook;
