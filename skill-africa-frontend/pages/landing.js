import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import Head from 'next/head';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  const controls = useAnimation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading delay for demonstration purposes
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  return (
    <div>
      {/* Loading animation */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <motion.div
            className="rounded-full border-t-4 border-blue-500 h-16 w-16 animate-spin"
            style={{ borderTopColor: '#3498db' }}
          ></motion.div>
        </div>
      )}

      {/* Your actual content */}
      {!loading && (
        <>
          <Head>
            <title>Skill Afrika</title>
            <meta name="description" content="Empowering young Africans with skills and opportunities" />
            <link rel="icon" href="/vercel.svg" />
          </Head>

      <main className="bg-gray-900 min-h-screen text-gray-100">
      {/**
       * The header section of the website containing the navigation bar.
       * The navigation bar is responsive, with a hamburger menu icon for small screens.
       * Clicking on the hamburger menu icon toggles the display of the navigation links.
       * On small screens, the navigation links are hidden by default and shown in a dropdown menu when the hamburger menu icon is clicked.
       */}
   
   <header className="bg-gray-800 text-white py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl md:text-2xl font-bold">Skill Afrika</h1>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#about"  className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition-all duration-300">About</a>
            <a href="#services"  className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition-all duration-300">Services</a>
            <a href="#testimonials"  className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition-all duration-300">Testimonials</a>
            <a href="#contact" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition-all duration-300">Contact</a>
            {isAuthenticated ? (
              <a href="/dashboard" className="hover:text-gray-400">Dashboard</a>
            ) : (
              <>
                {/* Animated Login Button */}
                <motion.a
                  href="/login"
                  className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  Login
                </motion.a>
                {/* Animated Sign Up Button */}
                <motion.a
                  href="/signup"
                  className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Sign Up
                </motion.a>
              </>
            )}
          </nav>
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800">
              <a href="#about" className="block py-2 px-4 hover:bg-gray-700">About</a>
              <a href="#services" className="block py-2 px-4 hover:bg-gray-700">Services</a>
              <a href="#testimonials" className="block py-2 px-4 hover:bg-gray-700">Testimonials</a>
              <a href="#contact" className="block py-2 px-4 hover:bg-gray-700">Contact</a>
              {isAuthenticated ? (
                <a href="/dashboard" className="block py-2 px-4 hover:bg-gray-700">Dashboard</a>
              ) : (
                <>
                  {/* Animated Login Button */}
                  <motion.a
                    href="/login"
                    className="block py-2 px-4 hover:bg-gray-700"
                    whileHover={{ scale: 1.1 }}
                  >
                    Login
                  </motion.a>
                  {/* Animated Sign Up Button */}
                  <motion.a
                    href="/signup"
                    className="block py-2 px-4 bg-blue-600 hover:bg-blue-500 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Sign Up
                  </motion.a>
                </>
              )}
            </div>
          )}
        </div>
      </header>

      <section className="bg-cover bg-center flex items-center justify-center" style={{ 
    backgroundImage: 'url(/hero.jpeg)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',
  }}>
  <div className="text-center bg-black bg-opacity-50 p-4 md:p-8 rounded">
    <motion.h2 
      className="text-2xl md:text-4xl font-bold mb-2 md:mb-4" 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      Empowering the Future of Africa
    </motion.h2>
    <motion.p 
      className="text-base md:text-xl mb-4 md:mb-8"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, delay: 0.5 }}
    >
      Providing valuable skills and opportunities to young Africans, empowering them to contribute positively to their communities and the continent&apos;s future.
    </motion.p>
    
    <div className="mt-2 md:mt-4 flex flex-col md:flex-row justify-center">
      <motion.a 
        href="/landing" 
        className="bg-green-600 px-3 py-2 md:px-4 md:py-2 rounded inline-block hover:bg-green-500 transition-all duration-300 mb-2 md:mb-0 md:mr-2" 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Sign Up as Freelancer
      </motion.a>
      <motion.a 
        href="/landing" 
        className="bg-red-600 px-3 py-2 md:px-4 md:py-2 rounded inline-block hover:bg-red-500 transition-all duration-300 md:ml-2" 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Sign Up as Sponsor
      </motion.a>
    </div>
  </div>
</section>


        <InView threshold={0.2}>
          {({ inView, ref }) => (
            <motion.section
              ref={ref}
              id="about"
              className="py-16 bg-gray-800"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
              }}
              transition={{ duration: 1 }}
            >
              <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-8">About Us</h2>
                <p className="text-lg mb-4">Skill Afrika serves as a catalyst for youth development and national growth by providing valuable skills and opportunities to young Africans.</p>
                <p className="text-lg">Our mission is to empower the youth to contribute positively to their communities and the continent&apos;s future.</p>
              </div>
            </motion.section>
          )}
        </InView>

        <InView threshold={0.2}>
          {({ inView, ref }) => (
            <motion.section
              ref={ref}
              id="services"
              className="py-16 bg-gray-700"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
              }}
              transition={{ duration: 1 }}
            >
              <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-8">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
                    className="bg-gray-800 p-8 rounded shadow transition-all duration-300 hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-2xl font-bold mb-4">Skill Training</h3>
                    <p>We offer comprehensive training programs in various fields to equip young Africans with the necessary skills to succeed.</p>
                  </motion.div>
                  <motion.div
                    className="bg-gray-800 p-8 rounded shadow transition-all duration-300 hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-2xl font-bold mb-4">Mentorship</h3>
                    <p>Our mentorship programs connect young individuals with experienced professionals for guidance and support.</p>
                  </motion.div>
                  <motion.div
                    className="bg-gray-800 p-8 rounded shadow transition-all duration-300 hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-2xl font-bold mb-4">Job Placement</h3>
                    <p>We assist our trainees in finding job opportunities that match their skills and aspirations.</p>
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
              id="testimonials"
              className="py-16 bg-gray-800 text-white"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
              }}
              transition={{ duration: 1 }}
            >
              <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-gray-900 rounded shadow-lg">
                    <p className="text-lg mb-4">&quot;Skill Afrika transformed my life! Their mentorship program helped me land my dream job and provided me with the skills I needed to excel in my career.&quot;</p>
                    <p className="text-lg font-bold">- zainab salihu</p>
                  </div>
                  <div className="p-8 bg-gray-900 rounded shadow-lg">
                    <p className="text-lg mb-4">&quot;I can&apos;t thank Skill Afrika enough for their job placement assistance. They connected me with an amazing opportunity that aligns perfectly with my skills and interests.&quot;</p>
                    <p className="text-lg font-bold">- abraham john</p>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </InView>

        
        {/* FAQ Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="text-left">
            <details className="mb-4">
              <summary className="font-bold">What is Skill Afrika?</summary>
              <p className="mt-2">Skill Afrika is an organization dedicated to empowering young Africans with essential skills and opportunities.</p>
            </details>
            <details className="mb-4">
              <summary className="font-bold">How can I sign up?</summary>
              <p className="mt-2">You can sign up as a freelancer or sponsor by clicking the respective buttons in the hero section.</p>
            </details>
            <details className="mb-4">
              <summary className="font-bold">What services do you offer?</summary>
              <p className="mt-2">We offer training programs, mentorship, and job placement services.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-gray-700">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter to receive the latest news and updates from Skill Afrika.</p>
          <form className="max-w-md mx-auto">
            <input type="email" className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white" placeholder="Enter your email" />
            <button type="submit" className="mt-4 w-full bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition-all duration-300">Subscribe</button>
          </form>
        </div>
      </section>

        

        <footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
    {/* About Section */}
    <div>
      <h2 className="text-xl font-bold mb-4">About Skill Afrika</h2>
      <p className="text-sm">
        Skill Afrika is dedicated to empowering young Africans with valuable skills and opportunities, enabling them to contribute positively to their communities and the continent&apos;s future.
      </p>
    </div>

    {/* Navigation Links */}
    <div>
      <h2 className="text-xl font-bold mb-4">Quick Links</h2>
      <ul className="text-sm space-y-2">
        <li><a href="#about" className="hover:underline">About Us</a></li>
        <li><a href="#services" className="hover:underline">Our Services</a></li>
        <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
        <li><a href="#contact" className="hover:underline">Contact Us</a></li>
      </ul>
    </div>

    

    {/* Contact Information */}
    <div>
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <ul className="text-sm space-y-2">
        <li>Email: <a href="mailto:contact@skillafrika.com" className="hover:underline">contact@skillafrika.com</a></li>
        <li>Phone: <a href="tel:+1234567890" className="hover:underline">+123 456 7890</a></li>
        <li>Address: 123 Skill Afrika St, Nairobi, Kenya</li>
      </ul>
    </div>

    {/* Social Media Icons */}
    <div>
      <h2 className="text-xl font-bold mb-4">Follow Us</h2>
      <div className="flex justify-center md:justify-start space-x-4">
        <a href="https://www.facebook.com/skillafrika" aria-label="Facebook" className="hover:text-blue-500">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.675 0h-21.35c-.734 0-1.325.591-1.325 1.325v21.351c0 .733.591 1.324 1.325 1.324h11.49v-9.294h-3.123v-3.62h3.123v-2.672c0-3.1 1.893-4.785 4.659-4.785 1.325 0 2.462.099 2.794.143v3.24h-1.918c-1.505 0-1.797.716-1.797 1.764v2.31h3.587l-.467 3.62h-3.12v9.294h6.117c.734 0 1.325-.591 1.325-1.325v-21.351c0-.734-.591-1.325-1.325-1.325z"/>
          </svg>
        </a>
        <a href="https://twitter.com/skillafrika" aria-label="Twitter" className="hover:text-blue-400">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.954 4.569c-.885.39-1.833.654-2.828.775 1.017-.611 1.798-1.574 2.165-2.724-.951.555-2.005.959-3.127 1.175-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.918 2.201-4.918 4.917 0 .385.045.76.127 1.122-4.083-.205-7.702-2.159-10.126-5.134-.423.729-.666 1.575-.666 2.476 0 1.71.87 3.217 2.19 4.1-.807-.026-1.566-.247-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.412.111-.847.171-1.296.171-.316 0-.625-.03-.927-.087.626 1.956 2.444 3.379 4.6 3.418-1.68 1.319-3.808 2.105-6.114 2.105-.397 0-.787-.023-1.174-.067 2.179 1.397 4.768 2.213 7.548 2.213 9.051 0 14.001-7.496 14.001-13.986 0-.213-.005-.425-.014-.636.961-.694 1.8-1.562 2.457-2.549z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/skillafrika" aria-label="LinkedIn" className="hover:text-blue-700">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.616 3h-15.232c-1.337 0-2.384 1.047-2.384 2.384v15.232c0 1.337 1.047 2.384 2.384 2.384h15.232c1.337 0 2.384-1.047 2.384-2.384v-15.232c0-1.337-1.047-2.384-2.384-2.384zm-11.616 18h-2v-10h2v10zm-1-11.268c-.68 0-1.232-.552-1.232-1.232s.552-1.232 1.232-1.232 1.232.552 1.232 1.232-.552 1.232-1.232 1.232zm11.268 11.268h-2v-5.555c0-1.319-.025-3.015-1.842-3.015-1.843 0-2.125 1.441-2.125 2.928v5.642h-2v-10h1.912v1.366h.028c.266-.505.917-1.037 1.89-1.037 2.018 0 2.39 1.328 2.39 3.056v6.615h-.002z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div className="container mx-auto text-center mt-8">
    <p>&copy; {new Date().getFullYear()} Skill Afrika. All rights reserved.</p>
  </div>
</footer>

      </main>
      </>
      )}
    </div>
  );
}