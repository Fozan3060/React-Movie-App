import { BiSolidStar } from 'react-icons/bi';
import { BsStarFill } from 'react-icons/bs';
import { GoArrowLeft } from 'react-icons/go';
import CustomStar from '../../shared/CustomStarRating/CustomStarRating';
import { useMovie } from '../../../Context/ReactMovieContext';
import Button from '../../shared/Button/Button';
import { useSuspenseQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface MovieDetailsResponse {
  Poster: string;
  Title: string;
  imdbID: string;
  Released: string;
  Runtime: string;
  imdbRating: string;
  Genre: string;
}

const fetchMovieDetails = async (selected: string) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?apikey=a3d0635c&i=${selected}`
  );
  return response.data;
};

const SelectedMovieDetails = () => {
  const {
    selected,
    setwatchMovieslist,
    watchMovieslist,
    handleClose,
    RemoveFromFav,
  } = useMovie();
  const [slideout, setSlideout] = useState<boolean>(false);

  const addToFav = (data: MovieDetailsResponse) => {
    const obj = {
      imdbID: selected,
      Title: data.Title,
      Released: data.Released,
      Poster: data.Poster,
      Runtime: data.Runtime,
      imdbRating: data.imdbRating,
      userRating: rating,
    };
    setwatchMovieslist((prev) => [...prev, obj]);
    setSlideout(true);
    setTimeout(() => {
      handleClose();
    }, 290);
  };

  const ChangeRating = () => {
    const newobj = watchMovieslist.find((movie) => movie.imdbID === selected);
    if (newobj) {
      newobj.userRating = rating;
      setwatchMovieslist((prev) =>
        prev.map((movie) =>
          movie.imdbID === selected
            ? { ...movie, userRating: rating }
            : { ...movie }
        )
      );
    }
  };
  console.log(watchMovieslist);
  const { data } = useSuspenseQuery<MovieDetailsResponse>({
    queryKey: ['FetchMovieDetails', selected],
    queryFn: () => fetchMovieDetails(selected),
  });
  const selectedMovie =
    watchMovieslist.find((movie) => movie.imdbID === selected) ||
    watchMovieslist.find((movie) => movie.imdbID === data?.imdbID);
  const UserRating = selectedMovie ? selectedMovie.userRating : 0;
  const [rating, setRating] = useState(UserRating);

  if (data)
    return (
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className={`${slideout ? 'animate-slideout' : ''} absolute w-full h-full bg-zinc-800 z-20 top-0`}
      >
        <div className="bg-zinc-700 z-20  bg-opacity-20 rounded-md ">
          <Button
            onclick={() => {
              setSlideout(true);
              setTimeout(() => {
                handleClose();
              }, 290);
            }}
            className="border bg-white absolute rounded-full hover:transition-all duration-200 hover:translate-x-2"
            description=""
            icon={<GoArrowLeft size={26} color="black" />}
          />
          <div className="flex flex-col lg:flex-row">
            <div>
              <img
                className="w-full lg:w-30 h-[16rem] lg:h-full"
                src={data.Poster}
                alt=""
              />
            </div>
            <div className="px-8 overflow- py-10 lg:w-[26rem]">
              <h1 className="text-white font-bold text-xl sm:text-2xl">
                {data.Title}
              </h1>
              <h1 className="mt-2 font-normal sm:text-lg">
                {data.Released} . {data.Runtime}
              </h1>
              <h1 className="mt-2 font-normal sm:text-lg">{data.Genre}</h1>
              <h1 className="mt-2 flex items-center gap-3 font-normal sm:text-lg">
                <BsStarFill color="yellow" />{' '}
                <span>{data.imdbRating} IMdb Rating</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center mt-5 ">
          {selectedMovie ? (
            <Button
              onclick={() => RemoveFromFav()}
              className="rounded-2xl mb-5 font-semibold bg-red-500 px-12 py-2 hover:shadow-zinc-600 hover:shadow-md hover:transition-all duration-200 hover:-translate-y-0.5"
              description="Remove From Favourites"
            />
          ) : (
            <Button
              onclick={() => addToFav(data)}
              className="rounded-2xl mb-5 font-semibold bg-purple-600 px-12 py-2 hover:shadow-zinc-600 hover:shadow-md hover:transition-all duration-200 hover:-translate-y-0.5"
              description="Add To Favourites"
            />
          )}
          {selectedMovie && rating !== selectedMovie.userRating && (
            <button
              onClick={() => ChangeRating()}
              className="rounded-2xl mt-2 mb-5 font-semibold bg-purple-700 px-12 py-2 hover:shadow-zinc-600 hover:shadow-md hover:transition-all duration-200 hover:-translate-y-0.5"
            >
              Rate Again
            </button>
          )}
          <CustomStar
            key={selected}
            length="10"
            setRating={setRating}
            rating={rating}
          />

          <h1 className="text-center flex items-center m-auto mt-2 gap-2  ">
            {selectedMovie ? 'You Rated : ' : 'Rating : '}
            <span className="text-purple-600 ">{rating} </span>{' '}
            {<BiSolidStar size={20} className="text-yellow-500" />}
          </h1>
        </div>
      </motion.div>
    );
};

export default SelectedMovieDetails;
