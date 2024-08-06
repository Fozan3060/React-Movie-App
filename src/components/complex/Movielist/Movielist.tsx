import { useMovie } from '../../../Context/ReactMovieContext';
import MovieItems from '../../compound/MovieItems/MovieItems';

const moviedata = [
  {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjk4MWQyZjQtMmY2ZS00YjdmLTgzMDUtYTc5ZDU5NzQzMmJmXkEyXkFqcGdeQXVyOTgwMDkwNzY@._V1_SX300.jpg',
    Title: 'Interstellar Ranger Commence',
    Type: 'series',
    Year: '2022–',
    imdbID: 'tt11236038',
  },
  {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjk4MWQyZjQtMmY2ZS00YjdmLTgzMDUtYTc5ZDU5NzQzMmJmXkEyXkFqcGdeQXVyOTgwMDkwNzY@._V1_SX300.jpg',
    Title: 'Interstellar Ranger Commence',
    Type: 'series',
    Year: '2022–',
    imdbID: 'tt11236038',
  },
];

const Movielist = () => {
  const { name } = useMovie();

  return (
    <div>
      <h1>{name}</h1>
      {moviedata.map((movie) => (
        <MovieItems movie={movie} type="NonWatched" />
      ))}
    </div>
  );
};

export default Movielist;
