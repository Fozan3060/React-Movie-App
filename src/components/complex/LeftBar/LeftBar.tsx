import { ReactNode } from 'react';

interface LeftBarProps {
  children: ReactNode;
}

const LeftBar: React.FC<LeftBarProps> = ({ children }) => {
  return (
    <div className="bg-zinc-800 lg:w-[27rem] sm:w-[27rem] w-[95%] scrollbar overflow-y-auto h-[35rem] rounded-md">
      {children}
    </div>
  );
};

export default LeftBar;
