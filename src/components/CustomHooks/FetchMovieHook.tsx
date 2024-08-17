import { useSuspenseQuery } from '@tanstack/react-query';
import axios from 'axios';

interface MovieResponse {
  Search: MovieItem[];
  totalResults: string;
  Response: string;
}

interface MovieItem {
  Poster: string;
  Title: string;
  Type: string;
  Released: string;
  imdbID: string;
  Year: string;
}

const fetchMovie = async (name: string) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=a3d0635c&s=${name}`
  );
  return response.data;
};

const useFetchMovieHook = ({ name }: { name: string }) => {
  const { data } = useSuspenseQuery<MovieResponse>({
    queryKey: ['FetchMovie', name],
    queryFn: () => fetchMovie(name),
  });
  return { data };
};

export default useFetchMovieHook;
