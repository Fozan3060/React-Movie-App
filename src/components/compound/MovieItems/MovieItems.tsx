import React from 'react';
import { BsCalendar2 } from 'react-icons/bs';
import { useMovie } from '../../../Context/ReactMovieContext';

interface MovieData {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

interface MovieItemsProps {
  movie: MovieData;
  type: string;
}

const MovieItems: React.FC<MovieItemsProps> = ({ movie, type }) => {
  const { setSelected, selected } = useMovie();
  console.log(selected);
  return (
    <div
      onClick={() => setSelected(movie.imdbID)}
      className="flex gap-6 hover:bg-zinc-700 tracking-widest transition-all duration-150 cursor-pointer items-center sm:px-10 px-8 py-5 border-b border-zinc-900"
    >
      <img src={movie.Poster} className="w-11 h-16" alt="" />
      <div className="space-y-1">
        <h1 className="font-bold">{movie.Title}</h1>
        <div className="flex items-center gap-2">
          {type == 'NonWatched' && (
            <>
              <BsCalendar2 /> {movie.Year}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieItems;
