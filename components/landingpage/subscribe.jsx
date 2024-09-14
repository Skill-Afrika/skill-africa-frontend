"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Subscribe = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='w-11/12 mx-auto mb-10'>
      <div className='bg-orange-100 md:w-9/12 mx-auto py-10 flex md:flex-row flex-col gap-4 md:gap-8 items-center justify-center md:px-8 px-4 rounded-xl'>
        <h1 className='md:text-2xl text-center md:text-start text-lg font-semibold md:w-1/2 w-full'>
          Subscribe to our newsletter
        </h1>
        <div className='md:w-1/2 w-full flex justify-center md:justify-start'>
          <input
            placeholder='Enter your email'
            className='md:w-4/5 w-3/4 bg-white rounded-xl pl-4'
          />
          <button className='px-6 py-3 text-white bg-gray-700 rounded-xl text-sm md:text-lg -ml-8'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
