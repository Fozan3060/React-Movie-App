import React from 'react';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="sm:w-full pt-7 pr-5 pl-5">
      <div className="bg-violet-600 flex place-items-center justify-between p-5 py-4 rounded-md">
        {children}
      </div>
    </div>
  );
};

export default Header;
