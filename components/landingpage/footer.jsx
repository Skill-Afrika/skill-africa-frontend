"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='bg-orange-50'>
      <div className='w-11/12 mx-auto py-6 md:text-lg'>
        <div className='flex flex-wrap text-center md:text-start gap-y-4 justify-between text-slate-600'>
          <div className='w-1/2 md:w-fit flex flex-col gap-2'>
            <h1>Events</h1>
            <h1>Blogs</h1>
            <h1>Blogs</h1>
            <h1>Contact us</h1>
          </div>
          <div className='w-1/2 md:w-fit flex flex-col gap-2'>
            <h1>Events</h1>
            <h1>Blogs</h1>
            <h1>Blogs</h1>
            <h1>Contact us</h1>
          </div>
          <div className='w-1/2 md:w-fit flex flex-col gap-2'>
            <h1>Events</h1>
            <h1>Blogs</h1>
            <h1>Blogs</h1>
            <h1>Contact us</h1>
          </div>
          <div className='w-1/2 md:w-fit flex flex-col gap-2'>
            <h1>Events</h1>
            <h1>Blogs</h1>
            <h1>Blogs</h1>
            <h1>Contact us</h1>
          </div>
        </div>
        <div className='h-0.5 mt-5 mb-2 bg-slate-400' />
        <div className='md:w-full w-11/12 mx-auto flex justify-between'>
          <div className='flex justify-between md:flex-row flex-col gap-4 md:gap-8'>
            <h1 className='text-orange-500 font-semibold'>@SkillAfrica</h1>
            <h1>All right reserved</h1>
          </div>
          <div className='flex justify-between md:flex-row flex-col gap-4 md:gap-8'>
            <h1>Terms of services</h1>
            <h1>Privacy policy</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
