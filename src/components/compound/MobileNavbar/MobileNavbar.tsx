import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../../shared/Button/Button';
import { RiMenu2Line, RiMenu3Fill } from 'react-icons/ri';
import Logo from '../../shared/Logo/Logo';
import { useMovie } from '../../../Context/ReactMovieContext';
import { Link } from 'react-scroll';

export const MobileNavbar = () => {
  const [shownavbar, setShownavbar] = useState(false);
  const { results } = useMovie();
  return (
    <>
      <Button
        onclick={() => setShownavbar(!shownavbar)}
        className=""
        icon={<RiMenu3Fill size={26} />}
        description={''}
      />
      <AnimatePresence>
        {shownavbar && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.2, type: 'Tween' }}
            className="h-96 pt-7 z-1 px-5 w-full right-0 left-0 z-10  top-0 fixed bg-opacity-70"
          >
            <div className="w-full bg-violet-600 flex flex-col  p-5 py-4 rounded-md h-full">
              <div className="flex w-full place-items-center justify-between">
                <Logo>🍿</Logo>
                <Button
                  onclick={() => setShownavbar(!shownavbar)}
                  className=""
                  icon={<RiMenu2Line size={26} />}
                  description={''}
                />
              </div>
              <div className="w-full flex justify-center  border-white border-opacity-30 py-2  border-b mt-5">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl hover:text-zinc-800"
                >
                  Found {results} Results
                </motion.span>
              </div>
              <div className="w-full flex justify-center border-white border-opacity-30 py-2 border-b mt-2">
                <Link to="FavMovie" smooth={true} duration={500}>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl hover:text-zinc-800"
                  >
                    Favorite Movies
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
