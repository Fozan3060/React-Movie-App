import { useMovie } from '../../../Context/ReactMovieContext';
import MovieItem from '../../compound/MovieItem/MovieItem';

const MovieWatchedList = () => {
  const { watchMovieslist } = useMovie();
  localStorage.setItem('WatchList', JSON.stringify(watchMovieslist));

  return (
    <div>
      {watchMovieslist.length !== 0 ? (
        watchMovieslist.map((item, index) => {
          return (
            <>
              <MovieItem key={index} type={'Watched'} movie={item} />
            </>
          );
        })
      ) : (
        <h1 className="text-center mt-20 text-2xl font-semibold">
          No movies in the list
        </h1>
      )}
    </div>
  );
};

export default MovieWatchedList;
