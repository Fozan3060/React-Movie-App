import axios from 'axios';
import { useMovie } from '../../../Context/ReactMovieContext';
import MovieItem from '../../compound/MovieItem/MovieItem';
import { useSuspenseQuery } from '@tanstack/react-query';

interface MovieItem {
  Poster: string;
  Title: string;
  Type: string;
  Released: string;
  imdbID: string;
  Year: string;
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

  const { data } = useSuspenseQuery<MovieResponse>({
    queryKey: ['FetchMovie', name],
    queryFn: () => fetchMovie(name),
  });

  if (!data || !data.Search) {
    return (
      <h1 className="text-center mt-20 text-2xl font-semibold">
        ⛔ No Movies Found
      </h1>
    );
  }

  return (
    <div>
      {data.Search.map((item, index) => (
        <MovieItem
          key={item.imdbID}
          type="NonWatched"
          id={index}
          movie={item}
        />
      ))}
    </div>
  );
};

export default Movielist;
