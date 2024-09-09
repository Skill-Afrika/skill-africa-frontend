"use client";

import img1 from "./image 2 (1).svg";
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
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css"; // Import Splide CSS

const Hero = () => {
  useEffect(() => {
    AOS.init();

    const splide = new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      gap: "1rem",
      perPage: 3,
      arrows: false,
      pagination: false,
      autoScroll: {
        speed: 0.5,
        pauseOnHover: true,
        pauseOnFocus: false,
      },
    });

    splide.mount({ AutoScroll });
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
      <h1 className="md:font-medium md:text-5xl text-2xl font-bold text-center">
        Empowering the future of Africas
      </h1>
      <p className="md:text-base font-normal text-xs text-center">
        Providing valuable skills and opportunities to young Africas, empowering
        them to contribute positively to their communities and the continents
        future.
      </p>
      <button
        className="md:text-sm text-xs font-medium md:px-8 md:py-3 px-5 py-2 text-white"
        style={{ backgroundColor: "rgba(220, 95, 0, 1)", borderRadius: "32px" }}
      >
        <Link href={"/register"}>Get started</Link>
      </button>

      {/* Splide Carousel */}
      <div className="splide flex overflow-hidden md:py-12 py-8">
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
              <Image
                src={img1}
                alt="img1"
                className="carousel-image w-full md:h-96 h-60"
                style={{
                  borderRadius: "1.5rem",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </li>
            <li className="splide__slide">
              <Image
                src={img2}
                alt="img2"
                className="carousel-image w-full md:h-96 h-60"
                style={{
                  borderRadius: "1.5rem",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </li>
            <li className="splide__slide">
              <Image
                src={img3}
                alt="img3"
                className="carousel-image w-full md:h-96 h-60"
                style={{
                  borderRadius: "1.5rem",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </li>
            <li className="splide__slide">
              <Image
                src={img4}
                alt="img4"
                className="carousel-image w-full md:h-96 h-60"
                style={{
                  borderRadius: "1.5rem",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </li>
            <li className="splide__slide">
              <Image
                src={img5}
                alt="img5"
                className="carousel-image w-full md:h-96 h-60"
                style={{
                  borderRadius: "1.5rem",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </li>
          </ul>
        </div>
      </div>

      {/* <Image src={img6} alt="img6" className="md:hidden flex" /> */}
    </div>
  );
};

export default Hero;
