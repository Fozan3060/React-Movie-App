import { BiSolidStar } from 'react-icons/bi';
import { BsStarFill } from 'react-icons/bs';
import { GoArrowLeft } from 'react-icons/go';
import CustomStar from '../../shared/CustomStarRating/CustomStarRating';
import { useMovie } from '../../../Context/ReactMovieContext';
import Button from '../../shared/Button/Button';

const movieDetails = {
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMjk4MWQyZjQtMmY2ZS00YjdmLTgzMDUtYTc5ZDU5NzQzMmJmXkEyXkFqcGdeQXVyOTgwMDkwNzY@._V1_SX300.jpg',
  Title: 'Interstellar Ranger Commence',
  Type: 'series',
  Year: '2022–',
  imdbID: 'tt11236038',
  Released: 2014,
  Runtime: '104',
  Genre: 'Horror',
  imdbRating: '10',
};

const SelectedMovieDetails = () => {
  const { rating, setRating } = useMovie();
  return (
    <div className="">
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
                src={movieDetails.Poster}
                alt=""
              />
            </div>
            <div className="px-8 overflow- py-10 lg:w-[26rem]">
              <h1 className="text-white font-bold text-xl sm:text-2xl">
                {movieDetails.Title}
              </h1>
              <h1 className="mt-2 font-normal sm:text-lg">
                {movieDetails.Released} . {movieDetails.Runtime}
              </h1>
              <h1 className="mt-2 font-normal sm:text-lg">
                {movieDetails.Genre}
              </h1>
              <h1 className="mt-2 flex items-center gap-3 font-normal sm:text-lg">
                <BsStarFill color="yellow" />{' '}
                <span>{movieDetails.imdbRating} IMdb Rating</span>
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

          <CustomStar length="10" setRating={setRating} rating={rating} />
          <h1 className="text-center flex items-center m-auto mt-2 gap-2  ">
            <span className="text-purple-600 ">{rating} </span>{' '}
            {<BiSolidStar size={20} className="text-yellow-400" />}
          </h1>
        </div>
      </>
    </div>
  );
};

export default SelectedMovieDetails;
