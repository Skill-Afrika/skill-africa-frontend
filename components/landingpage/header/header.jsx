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
        data-aos="fade-right"
        data-aos-duration="1500"
        className="md:flex hidden justify-between items-center md:h-20 h-16 w-full md:px-16 px-8 border-b border-zinc-200"
        style={{
          backgroundColor: "#FFFFFB",
          fontFamily: "Bricolage Grotesque, sans-serif",
        }}
      >
        <h1
          className="md:text-2xl text-xl font-bold opacity-50 md:px-0"
          style={{ color: "#04021B" }}
        >
          SkillAfrica
        </h1>
        <ul className="text-sm font-normal md:flex justify-between hidden">
          <li>
            <a href="#findfreelancers">Find freelancers</a>
          </li>
          <li className="ml-6">
            <a href="#events">Events</a>
          </li>
          <li className="ml-6">
            <a href="#blog">Blogs</a>
          </li>
          <li className="ml-6">
            <a href="#jobs">Jobs</a>
          </li>
          <li className="ml-6">
            <a href="#about">About us</a>
          </li>
        </ul>
        <ul className="md:flex hidden justify-between text-sm font-normal items-center">
          <li className="text-sm font-normal">
            <Link href={"/login"}>Login</Link>
          </li>
          <li
            className="font-medium px-6 py-2 bg-red-700 text-white ml-6"
            style={{ backgroundColor: "#DC5F00", borderRadius: "40px" }}
          >
            <a href="#signin">Sign in</a>
          </li>
        </ul>
      </div>

      {/* mobile */}
      <div
        className="flex md:hidden justify-between items-center px-8 h-16 w-full border-b border-zinc-200"
        style={{
          backgroundColor: "#FFFFFB",
          fontFamily: "Bricolage Grotesque, sans-serif",
        }}
      >
        <h1
          className="text-xl font-bold opacity-50"
          style={{ color: "#04021B" }}
        >
          SkillAfrica
        </h1>

        {!isClick ? (
          <BsListNested
            className={`${
              isClick ? "hidden" : ""
            } text-red-400 md:hidden block text-4xl cursor-pointer`}
            onClick={() => setIsClick(true)}
          />
        ) : (
          <nav
            className="fixed inset-0 flex flex-col items-center justify-center h-screen z-[1500]"
            style={{
              backgroundColor: "#111827",
            }}
          >
            <AiOutlineClose
              className="text-red-400 text-2xl absolute top-4 right-12 cursor-pointer"
              onClick={() => setIsClick(false)}
            />
            <ul
              className="space-y-8 text-center text-white"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
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
                <Link href={"/login"}>Login</Link>
              </li>
              <li>
                <Link href={"/sign in"}>Sign in</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};
export default Header;
