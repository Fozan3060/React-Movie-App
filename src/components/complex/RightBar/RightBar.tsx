import { ReactNode } from 'react';

interface Rightbar {
  children: ReactNode;
}
const Rightbar: React.FC<Rightbar> = ({ children }) => {
  return (
    <div className="bg-zinc-800 scrollbar w-[95%] sm:w-[27rem] overflow-y-auto h-[35rem] rounded-md">
      {children}
    </div>
  );
};

export default Rightbar;
