import React from 'react';
import { BsCalendar2, BsStarFill } from 'react-icons/bs';
import { useMovie } from '../../../Context/ReactMovieContext';
import { RiUserStarFill } from 'react-icons/ri';
import { CgTime } from 'react-icons/cg';

interface MovieData {
  Poster: string;
  Title: string;
  Released: string;
  imdbID: string;
  Runtime?: string;
  imdbRating?: string;
  userRating?: number;
  Year?: string;
}

interface MovieItemProps {
  movie: MovieData;
  type: string;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, type }) => {
  const { setSelected, selected } = useMovie();

  console.log(selected, movie);
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
          {type == 'Watched' && (
            <>
              <BsStarFill color="yellow" />
              {movie.imdbRating}
              <RiUserStarFill color="yellow" />
              {movie.userRating}
              <CgTime />
              {movie.Runtime}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
