"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";

const Connect = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='bg-orange-400 text-white py-10 mb-10'>
      <h1 className='md:w-1/2 w-11/12 mx-auto text-center md:text-4xl text-2xl font-semibold'>
        Connect with other freelancers just like you!
      </h1>
      <div className='w-fit mx-auto mt-5 px-4 py-2 bg-white text-orange-400 rounded-3xl md:text-lg'>
        <Link href='/community'>Join the community</Link>
      </div>
    </div>
  );
};
export default Connect;
