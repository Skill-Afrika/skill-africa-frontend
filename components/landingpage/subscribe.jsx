"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Subscribe = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="w-full flex flex-col pb-16 items-center px-16"
      data-aos="zoom-in-left"
      data-aos-duration="2000"
    >
      <div
        className="h-40 w-full flex md:flex-row flex-col gap-4 md:gap-8 items-center justify-center px-12 md:px-8 rounded-3xl"
        style={{ backgroundColor: "rgba(243, 108, 5, 0.1333)" }}
      >
        <h1 className="md:text-2xl text-sm font-semibold md:w-1/2 w-full">
          Subscribe to our newsletter
        </h1>
        <div className="md:w-1/2 w-full flex">
          <input
            placeholder="Subscribe"
            className="md:w-4/5 w-3/5 md:h-16 h-8 bg-white rounded-3xl pl-4"
          />
          <button
            className="md:px-6 md:py-4 px-3 py-2 text-white rounded-3xl text-xs md:text-lg -ml-8"
            style={{ backgroundColor: "rgba(4, 2, 27, 1)" }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
