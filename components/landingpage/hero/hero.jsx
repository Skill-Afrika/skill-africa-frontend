"use client";

import img1 from "./image 2.svg";
import img2 from "./image 5.svg";
import img3 from "./image 4.svg";
import img4 from "./image 3.svg";
import img5 from "./image 1.svg";
import img6 from "./Component 2.svg";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NumberTicker from "@/components/magicui/number-ticker";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos='zoom-in-up'
      data-aos-duration='1000'
      className='md:px-16 px-8 pt-10 flex flex-col justify-between items-center gap-6 pb-16 md:pb-4'>
      <h1 className='bg-orange-500 text-white px-4 py-3 md:px-6 md:py-3 rounded-3xl md:text-base md:font-medium font-bold text-sm'>
        Over{" "}
        <span>
          <NumberTicker value={5000} className='text-white' />
        </span>{" "}
        freelancers in our community
      </h1>

      <h1 className='md:w-1/2 md:font-medium md:text-4xl text-4xl font-bold text-center'>
        Empowering the future of Africans
      </h1>
      <p className='md:text-lg font-normal text-center md:w-7/12 text-slate-600'>
        Providing valuable skills and opportunities to young Africas, empowering
        them to contribute positively to their communities and the continents
        future.
      </p>
      <button className='md:text-sm bg-orange-500 hover:bg-orange-600 rounded-full font-medium md:px-8 md:py-3 px-5 py-2 text-white'>
        <Link href='/register'>Get started</Link>
      </button>
      <div className='md:flex gap-2 overflow-hidden hidden md:py-10 py-8 w-full'>
        <Image src={img1} alt='img1' />
        <Image src={img2} alt='img1' />
        <Image src={img3} alt='img1' />
        <Image src={img4} alt='img1' />
        <Image src={img5} alt='img1' />
      </div>
      <Image src={img6} alt='img1' className='md:hidden flex w-full mt-2' />
    </div>
  );
};
export default Hero;
