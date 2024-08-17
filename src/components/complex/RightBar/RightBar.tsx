import { ReactNode } from 'react';
import { useMovie } from '../../../Context/ReactMovieContext';

interface Rightbar {
  children: ReactNode;
}
const Rightbar: React.FC<Rightbar> = ({ children }) => {
  const { selected } = useMovie();
  return (
    <div
      className={`bg-zinc-800  ${selected ? 'h-[40rem]' : 'h-80'} relative scrollbar w-[95%] sm:w-[27rem] overflow-y-auto sm:h-[35rem] rounded-md`}
    >
      {children}
    </div>
  );
};

export default Rightbar;
