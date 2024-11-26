"use client";

import Image from "next/image";
import img2 from "./Learning.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import PulsatingButton from "@/components/magicui/pulsating-button";
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

const reasons = [
  {
    icon: img2,
    textHead: "Empowering the Next Generation",
    textBody:
      "Skill Afrika provides critical training and development programs to empower young Africans to thrive in the global digital economy.",
  },
  {
    icon: img2,
    textHead: "Bridging the gap ",
    textBody:
      "Africa's potential for digital growth is vast. However, a significant gap exists in tech skills and leadership amongst the youth.",
  },
  {
    icon: img2,
    textHead: "Building a Community ",
    textBody:
      "By nurturing a vibrant community of tech-savvy leaders, Skill Afrika aims to create a self-sustaining cycle of innovation and growth.",
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='w-11/12 mx-auto flex flex-col justify-between'>
      <div className='md:w-1/2 mx-auto text-center my-10'>
        <h1 className='text-3xl font-semibold mb-3'>
          Bridging the gap, building dreams.
        </h1>
        <h2 className='text-slate-500 md:text-lg'>
          Skill Africa helps you upskill, network, and land high-paying
          freelance projects from anywhere in the world.
        </h2>
      </div>

      <div className='md:flex justify-center items-center'>
        <p className='md:w-1/3 md:text-8xl text-3xl font-semibold text-center mb-5 md:mb-0'>Why Skill Afrika?</p>
        <div className='md:w-2/3 flex flex-wrap justify-center gap-x-10 gap-y-5 md:gap-y-0'>
          {reasons.map((reason, index) => {
            return (
              <div
                key={index}
                className='w-80 h-80 bg-orange-50 text-center rounded-full flex flex-col justify-center'>
                <div className='p-10 flex flex-col gap-2'>
                  <Image src={reason.icon} className='mx-auto' alt='img' />
                  <h1 className='font-semibold text-xl'>{reason.textHead}</h1>
                  <p className='text-sm'>{reason.textBody}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Link href='/community'>
        <PulsatingButton
          pulseColor='#fed7aa'
          className='mx-auto mt-10 px-4 py-2 bg-orange-500 md:text-xl'>
          Join the community
        </PulsatingButton>
      </Link>

      <h1 className='text-3xl font-semibold my-10 text-center'>
        We provide the range of services.
      </h1>

      <div className='flex md:flex-row flex-col flex-wrap justify-center md:gap-10 gap-5'>
        {services.map((card, index) => {
          return (
            <div
              key={index}
              className='bg-orange-50 md:w-5/12 flex flex-col justify-between gap-2 rounded-3xl px-5 py-4'>
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
