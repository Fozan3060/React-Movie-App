import { useMovie } from '../../../Context/ReactMovieContext';

const Results = () => {
  const { results } = useMovie();
  return (
    <div>
      <h1 className="text-xl">Found {results} results</h1>
    </div>
  );
};

export default Results;
