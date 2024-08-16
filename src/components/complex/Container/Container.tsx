import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 mt-10 px-5 m-auto items-center justify-center">
      {children}
    </div>
  );
};

export default Container;
