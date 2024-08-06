import axios from 'axios';
import { useMovie } from '../../../Context/ReactMovieContext';
import MovieItems from '../../compound/MovieItems/MovieItems';
import { useQuery } from '@tanstack/react-query';

interface MovieItem {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

interface MovieResponse {
  Search: MovieItem[];
  totalResults: string;
  Response: string;
}

const fetchMovie = async (name: string) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?apikey=a3d0635c&s=${name}`
  );
  return response.data;
};

const Movielist = () => {
  const { name } = useMovie();

  const { data, isLoading, isError, error } = useQuery<MovieResponse>({
    queryKey: ['FetchMovie', name],
    queryFn: () => fetchMovie(name),
    enabled: !!name,
  });

  if (isLoading) {
    return (
      <h1 className="text-center mt-20 text-2xl font-semibold">Loading ....</h1>
    );
  }

  if (isError) {
    return (
      <h1 className="text-center mt-20 text-2xl font-semibold">
        ⛔ {error instanceof Error ? error.message : 'An error occurred'}
      </h1>
    );
  }
  if (!name) {
    return (
      <h1 className="text-center mt-20 text-2xl font-semibold">
        ⛔ No Movies Searched
      </h1>
    );
  }
  if (!data || !data.Search) {
    return (
      <h1 className="text-center mt-20 text-2xl font-semibold">
        ⛔ No Movies Found
      </h1>
    );
  }

  return (
    <div>
      {data.Search.map((item) => (
        <MovieItems key={item.imdbID} type="NonWatched" movie={item} />
      ))}
    </div>
  );
};

export default Movielist;
