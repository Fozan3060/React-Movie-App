import { useMovie } from '../../../Context/ReactMovieContext';
import MovieItem from '../../compound/MovieItem/MovieItem';
import useFetchMovieHook from '../../CustomHooks/FetchMovieHook';

const Movielist = () => {
  const { name, setResults } = useMovie();
  const { data } = useFetchMovieHook({ name });

  if (!data || !data.Search) {
    setResults(0);
    return (
      <h1 className="text-center mt-20 text-2xl font-semibold">
        ⛔ No Movies Found
      </h1>
    );
  } else {
    setResults(data.Search.length);
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
  }
};

export default Movielist;
