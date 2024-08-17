import React, { useState } from 'react';
import { BsCalendar2, BsStarFill } from 'react-icons/bs';
import { useMovie } from '../../../Context/ReactMovieContext';
import { RiUserStarFill } from 'react-icons/ri';
import { CgTime } from 'react-icons/cg';
import { BiTrash } from 'react-icons/bi';
import Button from '../../shared/Button/Button';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';

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
  id: number;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, type, id }) => {
  const { setSelected, setwatchMovieslist, selected } = useMovie();
  const [slideout, setSlideout] = useState<boolean>(false);

  const handleRemoveFromFav = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSlideout(true);
    event.stopPropagation();
    setTimeout(() => {
      setwatchMovieslist((prev) => prev.filter((Movie) => Movie !== movie));
    }, 290);
  };
  return (
    <motion.div
      className={`border-b ${slideout && 'animate-slideout'}  cursor-pointer transition-all duration-150  border-zinc-900 hover:bg-zinc-700 sm:px-10 px-8 py-5`}
      initial={selected ? {} : { opacity: 0, x: -500 }}
      animate={selected ? {} : { opacity: 1, x: 0 }}
      transition={selected ? {} : { duration: 0.5, delay: id * 0.1 }}
      onClick={() => {
        setSelected(movie.imdbID);
        scroller.scrollTo('FavMovie', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      }}
    >
      <motion.div className="flex gap-6 items-center tracking-widest">
        <img src={movie.Poster} className="w-11 h-16" alt="" />
        <div className="space-y-1 w-96">
          <h1 className="font-bold">{movie.Title}</h1>
          <div className="flex  items-center gap-2">
            {type == 'NonWatched' && (
              <>
                <BsCalendar2 /> {movie.Year}
              </>
            )}
          </div>
          {type == 'Watched' && (
            <div className="hidden m-auto sm:flex  justify-center gap-2 items-center">
              <BsStarFill color="yellow" />
              {movie.imdbRating}
              <RiUserStarFill color="yellow" />
              {movie.userRating}
              <CgTime />
              {movie.Runtime}
            </div>
          )}
        </div>

        {type == 'Watched' && (
          <div className="flex justify-end">
            <Button description="" className="" onclick={handleRemoveFromFav}>
              <span className="hover:text-red-500">
                <BiTrash size={27} />
              </span>
            </Button>
          </div>
        )}
      </motion.div>
      {type == 'Watched' && (
        <div className="flex m-auto sm:hidden  justify-center gap-2 items-center">
          <BsStarFill color="yellow" />
          {movie.imdbRating}
          <RiUserStarFill color="yellow" />
          {movie.userRating}
          <CgTime />
          {movie.Runtime}
        </div>
      )}
    </motion.div>
  );
};

export default MovieItem;
