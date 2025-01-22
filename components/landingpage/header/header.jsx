"use client";

import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { BsListNested } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isClick, setIsClick] = useState(false);

  const transformstyle = {
    transform: isClick ? "scale(1)" : "",
    transition: "all .8s cubic-bezier(0.87, 0, 0.07, 1)",
  };

  return (
    <>
      <div
        data-aos='fade-right'
        data-aos-duration='500'
        className='flex bg-[#FFFFFB] justify-between items-center md:h-20 h-16 w-full md:px-16 px-8 border-b border-zinc-200'>
        <h1 className='md:text-2xl text-xl text-slate-600 font-bold md:px-0'>
          SkillAfrika
        </h1>
        <ul className='text-sm font-normal md:flex gap-5 justify-between hidden'>
          <a href='#findfreelancers'>Find freelancers</a>
          <a href='#events'>Events</a>
          <a href='#blog'>Blogs</a>
          <a href='#jobs'>Jobs</a>
          <a href='#about'>About us</a>
        </ul>
        <ul className='md:flex hidden justify-between text-sm font-normal items-center'>
          <li className='text-sm font-normal'>
            <Link href='/login'>Sign In</Link>
          </li>
          <li className='font-medium px-6 py-2 bg-[#DC5F00] text-white ml-6 rounded-full'>
            <Link href='/register'>Sign Up</Link>
          </li>
        </ul>
        {!isClick && (
          <BsListNested
            className={`${
              isClick ? "hidden" : ""
            } text-red-400 md:hidden block text-4xl cursor-pointer`}
            onClick={() => setIsClick(true)}
          />
        )}
      </div>

      {/* mobile */}
      <div className=''>
        {isClick && (
          <div className='bg-[#DC5F00] fixed z-10 inset-0 flex flex-col items-center justify-center h-screen'>
            <AiOutlineClose
              className='text-white text-2xl absolute top-5 right-12 cursor-pointer'
              onClick={() => setIsClick(false)}
            />
            <ul
              className='space-y-5 text-center text-white'
              data-aos='fade-right'
              data-aos-duration='1500'>
              <li>
                <Link href={"/findfreelancers"}>Find freelancers</Link>
              </li>
              <li>
                <Link href={"/events"}>Events</Link>
              </li>
              <li>
                <Link href={"/blogs"}>Blogs</Link>
              </li>
              <li>
                <Link href={"/jobs"}>Jobs</Link>
              </li>
              <li>
                <Link href={"/about"}>About us</Link>
              </li>
              <li>
                <Link href={"/login"}>Sign In</Link>
              </li>
              <li>
                <Link href={"/register"}>Sign Up</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
