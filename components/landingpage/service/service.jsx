"use client";

import Image from "next/image";
import img1 from "./Knowledge Transfer.svg";
import img2 from "./Learning.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import img3 from "./Profiles.svg";
// import img4 from "./Profiles (1).svg";
// import img5 from "./VIP.svg";

const services = [
  {
    icon: img2,
    textHead: "Skill Afrika",
    textBody:
      "We train and mentor freelancers equipping you with the skills needed to succeed in a knowledge - driven economy. Learn and earn with practical real life projects that helps you build acompelling portfolio",
  },
  {
    icon: img2,
    textHead: "Mentorship",
    textBody:
      "Our mentorship program connects you with experienced professionals ready to help you navigate your career journey. Our mentors are dedicated to helping you upskill and achieve your career goals with personalized guidance.",
  },
  {
    icon: img2,
    textHead: "Career Placement",
    textBody:
      "Learn how to land your first Fiverr gig, send effective cold emails and secure international opportunities. We provide job advertisements, recommendations and a list of the most frequently asked questions to ensure you are prepared for any opportunity.",
  },
  {
    icon: img2,
    textHead: "Premium Resources",
    textBody:
      "Enhance your learning with our premium resources, including free access to Udemy courses and daily links to top educational tools. Join our community and learn in-demand tech skills with affordable, installment payment options.",
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='w-11/12 mx-auto flex flex-col justify-between'>
      <div className='md:w-1/2 mx-auto text-center my-5'>
        <h1 className='text-3xl font-semibold mb-3'>
          Bridging the gap, building dreams.
        </h1>
        <h2 className='text-slate-500 text-lg'>
          Skill Africa helps you upskill, network, and land high-paying
          freelance projects from anywhere in the world.
        </h2>
      </div>
      <h1 className='text-3xl font-semibold my-10 text-center'>
        We provides the range of services.
      </h1>

      <div className='flex md:flex-row flex-col flex-wrap justify-center md:gap-10 gap-5'>
        {services.map((card) => {
          return (
            <div className='bg-orange-50 md:w-5/12 flex flex-col justify-between gap-2 rounded-3xl px-5 py-4'>
              <Image src={card.icon} alt='img' />
              <h1 className='font-semibold text-lg'>{card.textHead}</h1>
              <p className=''>{card.textBody}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Service;
