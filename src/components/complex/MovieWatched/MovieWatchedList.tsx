import { useMovie } from '../../../Context/ReactMovieContext';
import MovieItem from '../../compound/MovieItem/MovieItem';

const MovieWatchedList = () => {
  const { watchMovieslist } = useMovie();

  return (
    <div>
      {watchMovieslist.length !== 0 ? (
        watchMovieslist.map((item, index) => {
          return <MovieItem key={index} type={'Watched'} movie={item} />;
        })
      ) : (
        <h1 className="text-center font-bold text-2xl mt-5">
          No movies in the list
        </h1>
      )}
    </div>
  );
};

export default MovieWatchedList;
