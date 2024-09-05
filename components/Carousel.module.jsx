
import AfroStyles from '../app/landing/freelancers.js'; // Adjust the path according to your structure
import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../app/globals.css';
import Image from 'next/image.js';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.section
          ref={ref}
          className="bg-white text-black py-8 overflow-hidden"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-8">
            <div className="mx-auto w-full h-[80vh] overflow-hidden">
              <Slider {...settings}>
                {AfroStyles.map((item) => (
                  <div key={item.id} className="p-4">
                    <div className="relative">
                      <Image
                        className="object-cover w-full h-[250px] rounded-lg"
                        src={item.src}
                        alt={item.alt}
                      />
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white rounded-lg px-4 py-2 flex flex-col items-center max-w-[90%]">
                        <h2 className="text-sm font-semibold">{item.name}</h2>
                        <p className="text-xs">{item.occupation}</p>
                        <div className="mt-1 flex flex-wrap gap-1 justify-center">
                          {item.skills && Array.isArray(item.skills) && item.skills.map((skill, index) => (
                            <div key={index} className="bg-transparent border border-white rounded-full px-2 py-1 text-xs">
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </motion.section>
      )}
    </InView>
  );
};

export default Carousel;
