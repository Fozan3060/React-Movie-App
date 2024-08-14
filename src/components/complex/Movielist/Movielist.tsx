import { useMovie } from '../../../Context/ReactMovieContext';
import MovieItem from '../../compound/MovieItem/MovieItem';
import useFetchMovieHook from '../../CustomHooks/FetchMovieHook';

const Movielist = () => {
  const { name } = useMovie();
  const { data } = useFetchMovieHook({ name });

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
