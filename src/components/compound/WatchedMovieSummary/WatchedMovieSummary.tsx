import { BsHourglass, BsStarFill } from 'react-icons/bs';
import { RiListView, RiUser2Fill } from 'react-icons/ri';
import { MovieItem, useMovie } from '../../../Context/ReactMovieContext';

const WatchedMovieSummary = () => {
  const { watchMovieslist } = useMovie();
  const totalmoviewatched = watchMovieslist.length;

  const getMovieStatistics = (movies: MovieItem[]) => {
    let avgImdb = 0;
    let avgUserRating = 0;
    let avgRuntime = 0;
    if (movies.length !== 0) {
      console.log('jss');
      const { totalImdbRating, totalUserRating, totalRuntime } = movies.reduce(
        (acc, movie) => {
          acc.totalImdbRating += Number(
            movie.imdbRating === 'N/A' ? 0 : movie.imdbRating
          );
          // movie.Runtime.replace('min', '')
          acc.totalUserRating += movie.userRating;
          acc.totalRuntime += Number(
            movie.Runtime === 'N/A' ? 0 : movie.Runtime.replace('min', '')
          );
          return acc;
        },
        { totalImdbRating: 0, totalUserRating: 0, totalRuntime: 0 }
      );

      avgImdb = totalImdbRating / totalmoviewatched;
      avgUserRating = totalUserRating / totalmoviewatched;
      avgRuntime = totalRuntime / totalmoviewatched;
    }

    return [
      { icon: BsStarFill, rating: avgImdb.toFixed(1) },
      { icon: RiUser2Fill, rating: avgUserRating.toFixed(1) },
      { icon: BsHourglass, rating: `${avgRuntime.toFixed(1)} min` },
    ];
  };

  return (
    <div className="sm:px-10 px-8 py-6 rounded-md shadow-2xl bg-zinc-700 bg-opacity-40">
      <h1 className="">MOVIES WATCHED</h1>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <RiListView />
          <h1>{totalmoviewatched}</h1>
        </div>
        {getMovieStatistics(watchMovieslist).map((e, index) => {
          return (
            <div key={index} className="flex items-center gap-1">
              <e.icon color="yellow" />
              <h1>{e.rating}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WatchedMovieSummary;
