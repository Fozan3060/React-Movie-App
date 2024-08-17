import { ReactNode } from 'react';

interface LeftBarProps {
  children: ReactNode;
}

const LeftBar: React.FC<LeftBarProps> = ({ children }) => {
  return (
    <div
      id="search_movies"
      className="bg-zinc-800 lg:w-[27rem] h-80 sm:mt-0 mt-20 sm:w-[27rem] w-[95%] scrollbar overflow-y-auto sm:h-[35rem] rounded-md"
    >
      {children}
    </div>
  );
};

export default LeftBar;
