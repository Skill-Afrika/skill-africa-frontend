"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { FaArrowRight, FaUserFriends, FaHandsHelping } from "react-icons/fa";
import {
  FaChalkboardTeacher,
  FaUserTie,
  FaBriefcase,
  FaTools,
  FaUserCircle,
} from "react-icons/fa";

import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AfroStyles from "./freelancers";
import testimonials from "./freelancers";
import Image from "next/image";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div>
      {/* Loading animation */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <motion.div
            className="rounded-full border-t-4 border-blue-500 h-16 w-16 animate-spin"
            style={{ borderTopColor: "#3498db" }}
          ></motion.div>
        </div>
      )}

      {!loading && (
        <>
          <main className="bg-gray-900 min-h-screen text-gray-100">
            {/**
             * The header section of the website containing the navigation bar.
             * The navigation bar is responsive, with a hamburger menu icon for small screens.
             * Clicking on the hamburger menu icon toggles the display of the navigation links.
             * On small screens, the navigation links are hidden by default and shown in a dropdown menu when the hamburger menu icon is clicked.
             */}
            <header className="bg-white text-black py-4 sticky top-0 z-50 shadow-md">
              <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-xl md:text-2xl font-bold">Skill Afrika</h1>
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-black focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      ></path>
                    </svg>
                  </button>
                </div>
                <nav className="hidden md:flex space-x-4">
                  <a
                    href="#find-freelancers"
                    className="px-4 py-2 rounded hover:bg-gray-200 transition-all duration-300"
                  >
                    Find Freelancers
                  </a>
                  <a
                    href="#events"
                    className="px-4 py-2 rounded hover:bg-gray-200 transition-all duration-300"
                  >
                    Events
                  </a>
                  <a
                    href="#blogs"
                    className="px-4 py-2 rounded hover:bg-gray-200 transition-all duration-300"
                  >
                    Blogs
                  </a>
                  <a
                    href="#jobs"
                    className="px-4 py-2 rounded hover:bg-gray-200 transition-all duration-300"
                  >
                    Jobs
                  </a>
                  <a
                    href="#about-us"
                    className="px-4 py-2 rounded hover:bg-gray-200 transition-all duration-300"
                  >
                    About Us
                  </a>
                  {isAuthenticated ? (
                    <a href="/dashboard" className="hover:text-gray-500">
                      Dashboard
                    </a>
                  ) : (
                    <>
                      <motion.a
                        href="/login"
                        className="px-4 py-2 rounded hover:bg-gray-200 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        Login
                      </motion.a>
                      <motion.a
                        href="/signup"
                        className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Sign Up
                      </motion.a>
                    </>
                  )}
                </nav>
                {isMenuOpen && (
                  <div className="md:hidden absolute top-full left-0 right-0 bg-white text-black">
                    <a
                      href="#find-freelancers"
                      className="block py-2 px-4 hover:bg-gray-200"
                    >
                      Find Freelancers
                    </a>
                    <a
                      href="#events"
                      className="block py-2 px-4 hover:bg-gray-200"
                    >
                      Events
                    </a>
                    <a
                      href="#blogs"
                      className="block py-2 px-4 hover:bg-gray-200"
                    >
                      Blogs
                    </a>
                    <a
                      href="#jobs"
                      className="block py-2 px-4 hover:bg-gray-200"
                    >
                      Jobs
                    </a>
                    <a
                      href="#about-us"
                      className="block py-2 px-4 hover:bg-gray-200"
                    >
                      About Us
                    </a>
                    {isAuthenticated ? (
                      <a
                        href="/dashboard"
                        className="block py-2 px-4 hover:bg-gray-200"
                      >
                        Dashboard
                      </a>
                    ) : (
                      <>
                        <motion.a
                          href="/login"
                          className="block py-2 px-4 hover:bg-gray-200"
                          whileHover={{ scale: 1.1 }}
                        >
                          Login
                        </motion.a>
                        <motion.a
                          href="/signup"
                          className="block py-2 px-4 rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300"
                        >
                          Sign Up
                        </motion.a>
                      </>
                    )}
                  </div>
                )}
              </div>
            </header>

            <section className="bg-white flex flex-col md:flex-row items-center justify-center py-8 px-4 md:px-0 m-0">
              <motion.div
                className="bg-orange-500 text-black px-4 py-2 rounded-full text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Over 10000 creative freelancers in our community
              </motion.div>
            </section>

            <section className="bg-white flex items-center justify-center m-0">
              <div className="text-center p-4 md:p-8 rounded">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-black"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Empowering the Future of Africa
                </motion.h2>
                <motion.p
                  className="text-lg md:text-2xl mb-4 md:mb-8 text-black"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Providing valuable skills and opportunities to young Africans.
                </motion.p>
                <div className="mt-4 flex flex-col md:flex-row justify-center">
                  <motion.a
                    href="/landing"
                    className="bg-black text-white px-4 py-2 rounded-full inline-block hover:bg-black transition-all duration-300 md:px-6 md:py-3 md:mx-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Get Started
                  </motion.a>
                </div>
              </div>
            </section>

            <InView threshold={0.2}>
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
                    <div className="mx-auto w-full  overflow-hidden">
                      <Slider {...settings}>
                        {AfroStyles.map((item) => (
                          <div key={item.id} className="relative mx-0">
                            <div className="flex justify-center relative">
                              <img
                                className="object-cover w-[250px] h-[250px] rounded-lg"
                                src={item.src}
                                alt={item.alt}
                              />
                              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white rounded-lg px-2 py-1 flex flex-col items-center max-w-[90%]">
                                <h2 className="text-sm font-semibold">
                                  {item.name}
                                </h2>
                                <p className="text-xs">{item.occupation}</p>
                                <div className="mt-1 flex flex-wrap gap-1 justify-center">
                                  {item.skills &&
                                    Array.isArray(item.skills) &&
                                    item.skills.map((skill, index) => (
                                      <div
                                        key={index}
                                        className="bg-transparent border border-white rounded-full px-2 py-1 text-xs"
                                      >
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

            <InView threshold={0.2}>
              {({ inView, ref }) => (
                <motion.section
                  ref={ref}
                  className="bg-white text-black py-12"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                  }}
                  transition={{ duration: 1 }}
                >
                  <div className="text-center px-4">
                    <h2 className="text-3xl mb-4">
                      Unlocking Potential, Building Dreams:
                      <br />
                      Transforming Lives of Freelancers
                    </h2>
                    <p className="text-lg mx-auto max-w-full">
                      Join our vibrant community of African freelancers. Learn
                      new skills and land high-paying projects.
                      <br /> Together, we are building a brighter future for
                      freelance work in Africa.
                    </p>
                  </div>
                </motion.section>
              )}
            </InView>

            <InView threshold={0.2}>
              {({ inView, ref }) => (
                <motion.section
                  ref={ref}
                  className="bg-white text-black py-12"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                  }}
                  transition={{ duration: 1 }}
                >
                  <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      {/* Right Column - Text */}
                      <div className="flex justify-center">
                        <img
                          className="object-cover w-[400px] h-[400px] rounded-lg shadow-lg"
                          src="https://images.unsplash.com/photo-1528991435120-e73e05a58897?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Community member"
                        />
                      </div>
                      {/* Left Column - Image */}
                      <div>
                        <h2 className="text-4xl  mb-6">
                          Why Join Our Community?
                        </h2>
                        <ul className="list-disc pl-5 space-y-4 text-lg">
                          <li>
                            Access a network of like-minded African freelancers.
                          </li>
                          <li>Learn new skills from industry experts.</li>
                          <li>
                            Land high-paying projects and grow your career.
                          </li>
                          <li>
                            Collaborate on exciting projects with talented
                            peers.
                          </li>
                          <li>
                            Be part of a supportive and vibrant community.
                          </li>
                          <li>
                            Showcase your portfolio and attract potential
                            clients.
                          </li>
                          <li>
                            Expand your professional network and opportunities.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>
              )}
            </InView>

            <InView threshold={0.2}>
              {({ inView, ref }) => (
                <motion.section
                  ref={ref}
                  className="bg-white text-black py-12"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                  }}
                  transition={{ duration: 1 }}
                >
                  <div className="container mx-auto px-4 md:pl-30 flex flex-col items-center">
                    {" "}
                    {/* Increased left padding */}
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left md:justify-start">
                      {" "}
                      {/* Adjusted alignment */}
                      <FaUserFriends className="text-6xl text-gray-700 mr-4" />
                      <div>
                        <h2 className="text-3xl  mb-4">
                          Bridging the Gap, Building Teams:
                        </h2>
                        <p className="text-lg mb-4">
                          Skill Afrika helps you upskill, network, and land
                          high-paying freelance projects <br /> from anywhere in
                          the world.
                        </p>
                        <a
                          href="#learn-more"
                          className="text-orange-500 font-semibold inline-flex items-center"
                        >
                          Learn more
                          <FaArrowRight className="ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.section>
              )}
            </InView>

            <InView threshold={0.2}>
              {({ inView, ref }) => (
                <motion.section
                  ref={ref}
                  id="services"
                  className="py-16 bg-white text-black"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                  }}
                  transition={{ duration: 1 }}
                >
                  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    {/* New content on the left */}
                    <div className="flex flex-col md:w-1/3 items-center md:items-start mb-8 md:mb-0 md:pr-8">
                      <div className="flex items-center mb-4">
                        {/* Icon */}

                        <div>
                          {/* Title */}
                          <h2 className="text-2xl font-bold mb-2">
                            We Provide a Range of <br />
                            Services
                          </h2>

                          {/* Button */}
                          <a
                            href="#join-community"
                            className="text-white bg-black inline-flex items-center px-4 py-2 rounded-full"
                          >
                            Join Our Community
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Services grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3">
                      <motion.div
                        className="bg-gray-200 p-10 rounded-lg shadow transition-all duration-300 hover:shadow-lg flex flex-col items-start"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaChalkboardTeacher className="text-3xl text-black mb-4" />
                        <h3 className="text-2xl font-bold mb-4">
                          Skill Training
                        </h3>
                        <p className="flex-grow mb-4">
                          We offer comprehensive training programs in various
                          fields to equip young Africans with the necessary
                          skills to succeed.
                          <FaArrowRight className="ml-2" />
                        </p>
                      </motion.div>
                      <motion.div
                        className="bg-gray-200 p-10 rounded shadow transition-all duration-300 hover:shadow-lg flex flex-col items-start"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaUserTie className="text-3xl text-black mb-4" />
                        <h3 className="text-2xl font-bold mb-4">Mentorship</h3>
                        <p className="flex-grow mb-4">
                          Our mentorship programs connect young individuals with
                          experienced professionals for guidance and support.
                          <FaArrowRight className="ml-2" />
                        </p>
                      </motion.div>
                      <motion.div
                        className="bg-gray-200 p-10 rounded shadow transition-all duration-300 hover:shadow-lg flex flex-col items-start"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaBriefcase className="text-3xl text-black mb-4" />
                        <h3 className="text-2xl font-bold mb-4">
                          Job Placement
                        </h3>
                        <p className="flex-grow mb-4">
                          We assist our trainees in finding job opportunities
                          that match their skills and aspirations.
                          <FaArrowRight className="ml-2" />
                        </p>
                      </motion.div>
                      <motion.div
                        className="bg-gray-200 p-10 rounded shadow transition-all duration-300 hover:shadow-lg flex flex-col items-start"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaTools className="text-3xl text-black mb-4" />
                        <h3 className="text-2xl font-bold mb-4">
                          Premium Resources
                        </h3>
                        <p className="flex-grow mb-4">
                          Gain access to premium resources and tools that can
                          help you excel in your freelance career.
                          <FaArrowRight className="ml-2" />
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.section>
              )}
            </InView>

            <InView threshold={0.2}>
              {({ inView, ref }) => (
                <motion.section
                  ref={ref}
                  className="py-16 bg-white text-black overflow-hidden"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                  }}
                  transition={{ duration: 1 }}
                >
                  <div className="container mx-auto px-4 overflow-hidden">
                    <h2 className="text-3xl font-bold text-center mb-8">
                      Testimonials
                    </h2>
                    <Slider {...settings}>
                      {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-4">
                          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                            <FaUserCircle className="text-6xl text-gray-700 mx-auto mb-4" />
                            {testimonial.image && (
                              <img
                                className="w-16 h-16 rounded-full mx-auto mb-4"
                                src={testimonial.image}
                                alt={testimonial.name}
                              />
                            )}
                            <h3 className="text-xl font-bold mb-2">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                              {testimonial.role}
                            </p>
                            <p className="text-md">{testimonial.testimonial}</p>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </motion.section>
              )}
            </InView>

            <InView threshold={0.2}>
              {({ inView, ref }) => (
                <motion.section
                  ref={ref}
                  className="bg-white text-black py-16"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                  }}
                  transition={{ duration: 1 }}
                >
                  <div className="container mx-auto px-4">
                    <div
                      className="shadow-lg rounded-lg bg-orange-500 p-8 flex flex-col justify-center items-center"
                      style={{ height: "400px" }}
                    >
                      <h2 className="text-3xl font-bold mb-6 text-white">
                        Connect with Freelancers Just Like You
                      </h2>
                      <a
                        href="#join-community"
                        className="bg-black text-white font-semibold py-3 px-6 rounded-full inline-block"
                      >
                        Join Our Community
                      </a>
                    </div>
                  </div>
                </motion.section>
              )}
            </InView>

            <InView threshold={0.2}>
              {({ inView, ref }) => (
                <motion.section
                  ref={ref}
                  className="bg-white text-black py-16"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                  }}
                  transition={{ duration: 1 }}
                >
                  <div className="container mx-auto px-4 flex justify-center">
                    <div
                      className="shadow-lg rounded-lg bg-orange-500 p-12 flex flex-col justify-center items-center"
                      style={{ maxWidth: "1000px", width: "90%" }}
                    >
                      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">
                        Subscribe to Our Newsletter
                      </h2>
                      <div className="w-full md:w-auto flex flex-col md:flex-row items-center bg-white rounded-full overflow-hidden">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="bg-transparent py-3 md:py-4 px-6 md:px-8 text-black outline-none w-full md:w-auto mb-4 md:mb-0"
                        />
                        <button className="bg-black text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full md:ml-2">
                          Subscribe Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.section>
              )}
            </InView>

            <footer className="bg-gradient-to-r from-black to-orange-500 text-white py-6">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
                {/* About Section */}
                <div>
                  <h2 className="text-xl font-bold mb-4">About Skill Afrika</h2>
                  <p className="text-sm">
                    Skill Afrika is dedicated to empowering young Africans with
                    valuable skills and opportunities, enabling them to
                    contribute positively to their communities and the
                    continent&apos;s future.
                  </p>
                </div>

                {/* Navigation Links */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                  <ul className="text-sm space-y-2">
                    <li>
                      <a href="#about" className="hover:underline">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="hover:underline">
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a href="#testimonials" className="hover:underline">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="hover:underline">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                  <ul className="text-sm space-y-2">
                    <li>
                      Email:{" "}
                      <a
                        href="mailto:admin@skillafrika.com"
                        className="hover:underline"
                      >
                        admin@skillafrika.com
                      </a>
                    </li>
                    <li>
                      Phone:{" "}
                      <a
                        href="tel:+234 *** *** ***"
                        className="hover:underline"
                      >
                        +234 90 ** **
                      </a>
                    </li>
                    <li>Address: Abuja Nigeria </li>
                  </ul>
                </div>

                {/* Social Media Icons */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                  <div className="flex justify-center md:justify-start space-x-4">
                    <a
                      href="https://www.facebook.com/skillafrika"
                      aria-label="Facebook"
                      className="hover:text-blue-500"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22.675 0h-21.35c-.734 0-1.325.591-1.325 1.325v21.351c0 .733.591 1.324 1.325 1.324h11.49v-9.294h-3.123v-3.62h3.123v-2.672c0-3.1 1.893-4.785 4.659-4.785 1.325 0 2.462.099 2.794.143v3.24h-1.918c-1.505 0-1.797.716-1.797 1.764v2.31h3.587l-.467 3.62h-3.12v9.294h6.117c.734 0 1.325-.591 1.325-1.325v-21.351c0-.734-.591-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/skillafrika"
                      aria-label="Twitter"
                      className="hover:text-blue-400"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.954 4.569c-.885.39-1.833.654-2.828.775 1.017-.611 1.798-1.574 2.165-2.724-.951.555-2.005.959-3.127 1.175-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.918 2.201-4.918 4.917 0 .385.045.76.127 1.122-4.083-.205-7.702-2.159-10.126-5.134-.423.729-.666 1.575-.666 2.476 0 1.71.87 3.217 2.19 4.1-.807-.026-1.566-.247-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.412.111-.847.171-1.296.171-.316 0-.625-.03-.927-.087.626 1.956 2.444 3.379 4.6 3.418-1.68 1.319-3.808 2.105-6.114 2.105-.397 0-.787-.023-1.174-.067 2.179 1.397 4.768 2.213 7.548 2.213 9.051 0 14.001-7.496 14.001-13.986 0-.213-.005-.425-.014-.636.961-.694 1.8-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/skillafrika"
                      aria-label="LinkedIn"
                      className="hover:text-blue-700"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19.616 3h-15.232c-1.337 0-2.384 1.047-2.384 2.384v15.232c0 1.337 1.047 2.384 2.384 2.384h15.232c1.337 0 2.384-1.047 2.384-2.384v-15.232c0-1.337-1.047-2.384-2.384-2.384zm-11.616 18h-2v-10h2v10zm-1-11.268c-.68 0-1.232-.552-1.232-1.232s.552-1.232 1.232-1.232 1.232.552 1.232 1.232-.552 1.232-1.232 1.232zm11.268 11.268h-2v-5.555c0-1.319-.025-3.015-1.842-3.015-1.843 0-2.125 1.441-2.125 2.928v5.642h-2v-10h1.912v1.366h.028c.266-.505.917-1.037 1.89-1.037 2.018 0 2.39 1.328 2.39 3.056v6.615h-.002z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="container mx-auto text-center mt-8">
                <p>
                  &copy; {new Date().getFullYear()} Skill Afrika. All rights
                  reserved.
                </p>
              </div>
            </footer>
          </main>
        </>
      )}
    </div>
  );
}
