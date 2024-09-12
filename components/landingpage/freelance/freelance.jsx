"use client";

import Image from "next/image";
import img1 from "./image 3 (1).svg";
import img3 from "./image 5 (2).svg";
import img4 from "./image 3 (2).svg";
import img5 from "./image 5 (3).svg";
import img6 from "./image 3 (3).svg";
import img7 from "./image 5 (4).svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Marquee from "@/components/magicui/marquee";

const freelancers = [
  {
    img: img1,
    name: "Samuel Adeiza Musa",
    title: "Wordpress designer",
    bio: "Skill Afrika has really helped me in immeasurable ways. I learnt SEO, WordPress Web design, technical and ghostwriting, which helped me earn my first 1500$ on LinkedIn.",
  },
  {
    img: img3,
    name: "Derick Raven",
    title: "Web designer",
    bio: "The coupons and courses shared on SkillAfrika has ensured a considerable advance in my education. I now have many certificates to my name that makes me highly sought after when I apply to any organization.",
  },
  {
    img: img3,
    name: "DZ",
    title: "Graphics & web design- Agrarian Economist",
    bio: "Thanks to Skill Afrika; I have scaled my business, found better clients, and achieved a balanced life. The dedication of this platform to helping us grow through courses, training, and job opportunities is truly inspiring.",
  },
  {
    img: img3,
    name: "Muaz Abdulsamed",
    title: "IT Professionals",
    bio: "I cannot lie, Skill Afrika opened my eyes to aspects of tech I was in fact ignorant of and through its free Udemy coupons I have been able to upgrade and advance my knowledge in Excel and acquire certificates too. With love from Ghana.",
  },
  {
    img: img3,
    name: "Shodimu Funmilayo",
    title: "Data Analyst",
    bio: "Skill Afrika has transformed my professional growth and helped me gained knowledge in Tech Skills especially in Data Analytics by providing free Udemy Coupons, LinkedIn learning access, encouraged me to fight against Procrastination.",
  },
  {
    img: img3,
    name: "Bally Omoluabi",
    title: "Web3 Innovative Manager",
    bio: "I just came across Skill Afrika and I am locked in fully I now have clarity towards my path in the tech space. Feels good to be amidst like minded result oriented people gaining knowledge and collaboratively solving problems.",
  },
  {
    img: img3,
    name: "Aderoyal",
    title: "Product designer/Fiverr freelancer",
    bio: "Skill Afrika has helped me grow my knowledge in the product design space. Asides providing me with so many free courses to help me advance in the tech space, Skill Afrika constantly nudges me to take the next steps, helping me shun procrastination.",
  },
];

const Freelancer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='w-11/12 mx-auto my-10 relative'>
      <h1 className='text-center text-3xl font-semibold mb-3'>
        Our freelancers and their word.
      </h1>
      <h2 className='text-center md:text-lg text-slate-500 mb-8'>
        Hear what they have to say about us and be convinced,
      </h2>

      <Marquee className='[--duration:70s]'>
        <div className='flex items-center gap-5'>
          {freelancers.map((card) => {
            return (
              <div className='w-96 bg-white md:px-6 px-3 py-3 md:py-6 rounded-2xl border border-solid border-red-200 cursor-pointer'>
                <div className='flex items-center mb-3'>
                  <Image src={card.img} alt='img' className='mr-4' />
                  <div className='flex flex-col'>
                    <h1 className='text-sm font-semibold'>{card.name}</h1>
                    <h2 className='text-xs'>{card.title}</h2>
                  </div>
                </div>
                <div>{card.bio}</div>
              </div>
            );
          })}
        </div>
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 md:w-1/3 w-1/6 bg-gradient-to-r from-white'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 md:w-1/3 w-1/6 bg-gradient-to-l from-white'></div>
    </div>
  );
};
export default Freelancer;
