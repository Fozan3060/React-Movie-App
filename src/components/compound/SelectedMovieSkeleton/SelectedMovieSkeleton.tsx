import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import SkeletonLoader from '../../shared/SkeletonLoader/SkeletonLoader';

export const SelectedMovieSkeleton = () => {
  return (
    <SkeletonLoader className="">
      <div className="flex-col flex lg:flex-row  gap-12">
        <div className="bg-gray-400 h-64 lg:w-44 w-full"></div>
        <div className="w-44 flex lg:ml-0 ml-10 flex-col justify-center gap-5">
          <div className="h-5 w-3/4 bg-gray-400"></div>
          <div className="h-5 w-full bg-gray-400"></div>
          <div className="h-5 w-full bg-gray-400"></div>
          <div className="flex gap-2 items-center">
            <BsFillStarFill size={24} className="text-gray-400" />
            <div className="h-5 w-full bg-gray-400"></div>
          </div>
        </div>
      </div>
      <div className="flex mt-8 flex-col gap-4">
        <div className="bg-gray-400 h-10 w-full m-auto rounded-2xl"></div>
        <div className="flex m-auto gap-2">
          {Array.from(Array(Number(10)).keys()).map(() => (
            <div className="">
              <BsFillStarFill size={24} className="text-gray-400" />
            </div>
          ))}
        </div>
        <div className="flex h-22 gap-2 w-32 m-auto items-center">
          <div className="h-5 w-full  bg-gray-400"></div>:
          <BsFillStarFill size={32} className="text-gray-400" />
        </div>
      </div>
    </SkeletonLoader>
  );
};
