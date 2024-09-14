"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";
import BlurFade from "../magicui/blur-fade";
import PulsatingButton from "../magicui/pulsating-button";

const Connect = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='bg-orange-400 text-white py-10 mb-10'>
      <BlurFade delay={0.25 * 2} inView>
        <h1 className='md:w-1/2 w-11/12 mx-auto text-center md:text-4xl text-2xl font-semibold'>
          Connect with other freelancers just like you!
        </h1>
      </BlurFade>
      <Link href='/community'>
        <PulsatingButton
          pulseColor='#fed7aa'
          className='w-fit mx-auto mt-5 px-4 py-2 bg-white text-orange-500 md:text-lg'>
          Join the community
        </PulsatingButton>
      </Link>
    </div>
  );
};
export default Connect;
