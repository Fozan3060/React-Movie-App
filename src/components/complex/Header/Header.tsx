import { useEffect, useRef } from 'react';
import Logo from '../../shared/Logo/Logo';
import Input from '../../shared/Input/Input';
import Results from '../../compound/Results/Results';
import { useMovie } from '../../../Context/ReactMovieContext';
import { MobileNavbar } from '../../compound/MobileNavbar/MobileNavbar';

const handleScroll = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Header = () => {
  const { setName, name } = useMovie();
  const inputElementRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Enter' && inputElementRef.current) {
        inputElementRef.current.focus();
      }
    };

    if (inputElementRef.current) {
      console.log(inputElementRef.current.value);
      inputElementRef.current.focus();
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div className="sm:w-full pt-7 px-5 sm:relative z-30 fixed w-full top-0">
      <div className="bg-violet-600 flex place-items-center justify-between p-5 py-4 rounded-md">
        <Logo>🍿</Logo>
        <Input
          onClick={handleScroll}
          setname={setName}
          name={name}
          className="bg-violet-500 text-xl outline-none text-white md:w-96  w-[12rem] relative right-2 sm:right-0 sm:w-[18rem] h-10 rounded-md px-3 transform transition-all duration-300 ease-in-out
             hover:shadow-lg placeholder-slate-300 hover:-translate-y-0.5 focus:-translate-y-0.5  focus:shadow-xl"
          placeholder="Search Movie"
          ref={inputElementRef}
        />
        <div className="sm:block  hidden">
          <Results />
        </div>
        <div className="sm:hidden  block">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
