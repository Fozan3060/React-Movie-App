import { ReactNode } from 'react';

const Logo = ({ children }: { children: ReactNode }) => {
  return (
    <div className="sm:text-5xl relative right-3 text-4xl">{children}</div>
  );
};

export default Logo;
