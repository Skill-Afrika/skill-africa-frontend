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

const Freelancer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="px-16 md:pt-32 pt-12"
      data-aos="zoom-in-up"
      data-aos-duration="3000"
    >
      <h1 className="text-center md:text-4xl font-semibold text-xl mb-3">
        Our freelancers and their word.
      </h1>
      <h2 className="text-center md:text-xl font-medium text-xs mb-8">
        Hear what they have to say about us and be convinced,
      </h2>
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-4 lg:grid-cols-2 place-items-center">
        <div className="flex flex-col w-80 md:h-60 h-48 bg-white md:px-6 px-3 py-3 md:py-6 rounded-2xl border border-solid border-red-200">
          <div className="flex items-center mb-3">
            <Image src={img3} alt="img" className="mr-4" />
            <div className="flex flex-col">
              <h1 className="text-sm font-semibold">Samuel Adeiza Musa</h1>
              <h2 className="text-xs">Wordpress designer</h2>
            </div>
          </div>
          <p className="md:text-sm text-xs">
            Skill Afrika has really helped me in immeasurable ways. I learnt
            SEO, WordPress Web design, technical and ghostwriting, which helped
            me earn my first 1500$ on LinkedIn.
          </p>
        </div>

        <div className="flex flex-col w-80 md:h-60 h-48 bg-white md:px-6 px-3 py-3 md:py-6 rounded-2xl border border-solid border-red-200">
          <div className="flex items-center mb-3">
            <Image src={img4} alt="img" className="mr-4" />
            <div className="flex flex-col">
              <h1 className="text-sm font-semibold">Derick Raven</h1>
              <h2 className="text-xs">Web designer</h2>
            </div>
          </div>
          <p className="md:text-sm text-xs">
            The coupons and courses shared on SkillAfrika has ensured a
            considerable advance in my education. I now have many certificates
            to my name that makes me highly sought after when I apply to any
            organization.
          </p>
        </div>

        <div className="flex flex-col w-80 md:h-60 h-48 bg-white md:px-6 px-3 py-3 md:py-6 rounded-2xl border border-solid border-red-200">
          <div className="flex items-center mb-3">
            <Image src={img5} alt="img" className="mr-4" />
            <div className="flex flex-col">
              <h1 className="text-sm font-semibold">DZ</h1>
              <h2 className="text-xs">
                Graphics & web design- Agrarian Economist
              </h2>
            </div>
          </div>
          <p className="md:text-sm text-xs">
            Thanks to Skill Afrika; I've scaled my business, found better
            clients, and achieved a balanced life. The dedication of this
            platform to helping us grow through courses, training, and job
            opportunities is truly inspiring.
          </p>
        </div>

        <div className="flex flex-col w-80 md:h-60 h-48 bg-white md:px-6 px-3 py-3 md:py-6 rounded-2xl border border-solid border-red-200">
          <div className="flex items-center mb-3">
            <Image src={img6} alt="img" className="mr-4" />
            <div className="flex flex-col">
              <h1 className="text-sm font-semibold">Muaz Abdulsamed</h1>
              <h2 className="text-xs">IT Professionals</h2>
            </div>
          </div>
          <p className="md:text-sm text-xs">
            I can't lie, Skill Afrika opened my eyes to aspects of tech I was in
            fact ignorant of and through its free Udemy coupons I have been able
            to upgrade and advance my knowledge in Excel and acquire
            certificates too. With love from Ghana
          </p>
        </div>

        <div className="flex flex-col w-80 md:h-60 h-48 bg-white md:px-6 px-3 py-3 md:py-6 rounded-2xl border border-solid border-red-200">
          <div className="flex items-center mb-3">
            <Image src={img7} alt="img" className="mr-4" />
            <div className="flex flex-col">
              <h1 className="text-sm font-semibold">Shodimu Funmilayo</h1>
              <h2 className="text-xs">Data Analyst</h2>
            </div>
          </div>
          <p className="md:text-sm text-xs">
            Skill Afrika has transformed my professional growth and helped me
            gained knowledge in Tech Skills especially in Data Analytics by
            providing free Udemy Coupons, LinkedIn learning access, encouraged
            me to fight against "Procrastination".
          </p>
        </div>

        <div className="flex flex-col w-80 md:h-60 h-48 bg-white md:px-6 px-3 py-3 md:py-6 rounded-2xl border border-solid border-red-200">
          <div className="flex items-center mb-3">
            <Image src={img1} alt="img" className="mr-4" />
            <div className="flex flex-col">
              <h1 className="text-sm font-semibold">Bally Omoluabi</h1>
              <h2 className="text-xs">Web3 Innovative Manager</h2>
            </div>
          </div>
          <p className="md:text-sm text-xs">
            I just came across Skill Afrika and I'm locked in fully I now have
            clarity towards my path in the tech space. Feels good to be amidst
            like minded result oriented people gaining knowledge and
            collaboratively solving problems.
          </p>
        </div>

        <div className="flex flex-col w-80 md:h-60 h-48 bg-white md:px-6 px-3 py-3 md:py-6 rounded-2xl border border-solid border-red-200">
          <div className="flex items-center mb-3">
            <Image src={img1} alt="img" className="mr-4" />
            <div className="flex flex-col">
              <h1 className="text-sm font-semibold">Aderoyal</h1>
              <h2 className="text-xs">Product designer/Fiverr freelancer</h2>
            </div>
          </div>
          <p className="md:text-sm text-xs">
            Skill Afrika has helped me grow my knowledge in the product design
            space. Asides providing me with so many free courses to help me
            advance in the tech space, Skill Afrika constantly nudges me to take
            the next steps, helping me shun procrastination.
          </p>
        </div>

        <div className="flex flex-col w-80 md:h-60 h-48 bg-white md:px-6 px-3 py-3 md:py-6 rounded-2xl border border-solid border-red-200">
          <div className="flex items-center mb-3">
            <Image src={img1} alt="img" className="mr-4" />
            <div className="flex flex-col">
              <h1 className="text-sm font-semibold">Nancy Gideon</h1>
              <h2 className="text-xs">Product designer at Jones</h2>
            </div>
          </div>
          <p className="md:text-sm text-xs">
            The most important for me is beating Procrastination. I have taken
            my online classes serious and also have free Udemy courses I didn't
            use a dime to buy. Thank you Skill Africa.
          </p>
        </div>

        <div className="flex flex-col w-80 md:h-60 h-48 bg-white md:px-6 px-3 py-3 md:py-6 rounded-2xl border border-solid border-red-200">
          <div className="flex items-center mb-3">
            <Image src={img1} alt="img" className="mr-4" />
            <div className="flex flex-col">
              <h1 className="text-sm font-semibold">Horla</h1>
              <h2 className="text-xs">Backend Javascript</h2>
            </div>
          </div>
          <p className="md:text-sm text-xs">
            This platform has been a game changer for my life, and in due time,
            I'll achieve all my goals and be perfect in the skills I am learning
            currently. Thank you so much.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Freelancer;
