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

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      className="md:pt-24 md:px-16 px-8 pt-12 flex flex-col justify-between items-center gap-6 pb-16 md:pb-4"
      style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
    >
      <h1
        className="px-3 py-2 md:px-6 md:py-4 rounded-3xl md:text-base md:font-medium font-bold text-xs"
        style={{ backgroundColor: "rgba(165, 71, 0, 0.1)" }}
      >
        Over 5000 freelancers in our community
      </h1>
      <h1 className="md:font-medium md:text-7xl text-2xl font-bold text-center">
        Empowering the future of Africas
      </h1>
      <p className="md:text-2xl font-normal text-xs text-center">
        Providing valuable skills and opportunities to young Africas, empowering
        them to contribute positively to their communities and the continent's
        future.
      </p>
      <button
        className="md:text-lg text-xs font-semibold md:px-8 md:py-4 px-6 py-3 text-white"
        style={{ backgroundColor: "rgba(220, 95, 0, 1)", borderRadius: "32px" }}
      >
        <Link href={"/register"}>Get started</Link>
      </button>
      <div className="md:flex gap-2 overflow-hidden hidden md:py-12 py-8">
        <Image src={img1} alt="img1" />
        <Image src={img2} alt="img1" />
        <Image src={img3} alt="img1" />
        <Image src={img4} alt="img1" />
        <Image src={img5} alt="img1" />
      </div>
      <Image src={img6} alt="img1" className="md:hidden flex" />
    </div>
  );
};
export default Hero;
