import { BiSolidStar } from 'react-icons/bi';
import { BsStarFill } from 'react-icons/bs';
import { GoArrowLeft } from 'react-icons/go';
import CustomStar from '../../shared/CustomStarRating/CustomStarRating';
import { useMovie } from '../../../Context/ReactMovieContext';
import Button from '../../shared/Button/Button';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface MovieDetailsResponse {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Released: string;
  Runtime: string;
  Genre: string;
  imdbRating: string;
}

const fetchMovieDetails = async (selected: string) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?apikey=a3d0635c&i=${selected}`
  );
  return response.data;
};

const SelectedMovieDetails = () => {
  const { rating, setRating, selected } = useMovie();

  const { data, isLoading, isError } = useQuery<MovieDetailsResponse>({
    queryKey: ['FetchMovieDetails', selected],
    queryFn: () => fetchMovieDetails(selected),
    enabled: !!selected,
  });

  if (isLoading) {
    return (
      <h1 className="flex justify-center mx-auto text-center mt-20 text-2xl font-semibold">
        Loading ....
      </h1>
    );
  }
  if (isError) {
    return (
      <h1 className="flex justify-center text-red-500 mx-auto text-center mt-20 text-2xl font-semibold">
        Something Went Wrong
      </h1>
    );
  }
  return (
    <>
      <div className="bg-zinc-700 z-20  bg-opacity-20 rounded-md ">
        <Button
          onclick={() => console.log('close')}
          className="border bg-white absolute rounded-full hover:transition-all duration-200 hover:translate-x-2"
          description=""
          icon={<GoArrowLeft size={26} color="black" />}
        />
        <div className="flex flex-col lg:flex-row">
          <div>
            <img
              className="w-full lg:w-30 h-[16rem] lg:h-full"
              src={data?.Poster}
              alt=""
            />
          </div>
          <div className="px-8 overflow- py-10 lg:w-[26rem]">
            <h1 className="text-white font-bold text-xl sm:text-2xl">
              {data?.Title}
            </h1>
            <h1 className="mt-2 font-normal sm:text-lg">
              {data?.Released} . {data?.Runtime}
            </h1>
            <h1 className="mt-2 font-normal sm:text-lg">{data?.Genre}</h1>
            <h1 className="mt-2 flex items-center gap-3 font-normal sm:text-lg">
              <BsStarFill color="yellow" />{' '}
              <span>{data?.imdbRating} IMdb Rating</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-5 ">
        <Button
          onclick={() => console.log('add to fav')}
          className="rounded-2xl mb-5 font-semibold bg-purple-600 px-12 py-2 hover:shadow-zinc-600 hover:shadow-md hover:transition-all duration-200 hover:-translate-y-0.5"
          description="Add To Favourites"
        />
        <Button
          onclick={() => console.log('Remove fav')}
          className="rounded-2xl mb-5 font-semibold bg-red-500 px-12 py-2 hover:shadow-zinc-600 hover:shadow-md hover:transition-all duration-200 hover:-translate-y-0.5"
          description="Remove From Favourites"
        />

        <CustomStar length="10" setRating={setRating} rating={rating} />
        <h1 className="text-center flex items-center m-auto mt-2 gap-2  ">
          <span className="text-purple-600 ">{rating} </span>{' '}
          {<BiSolidStar size={20} className="text-yellow-400" />}
        </h1>
      </div>
    </>
  );
};

export default SelectedMovieDetails;
