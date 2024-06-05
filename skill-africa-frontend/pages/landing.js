import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import Head from 'next/head';
import { useState } from 'react';


export default function Home() {
  const controls = useAnimation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  return (
    <div>
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
  {/* Container for the header content */}
  <div className="container mx-auto flex justify-between items-center px-4">
    {/* Website title */}
    <h1 className="text-xl md:text-2xl font-bold">Skill Afrika</h1>

    {/* Hamburger menu icon for small screens */}
    <div className="md:hidden">
      {/* Button to toggle the menu */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
        {/* Hamburger menu icon */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    {/* Navigation links */}
    <nav className="hidden md:flex space-x-4">
      <a href="#about" className="hover:text-gray-400">About</a>
      <a href="#services" className="hover:text-gray-400">Services</a>
      <a href="#testimonials" className="hover:text-gray-400">Testimonials</a>
      <a href="#contact" className="hover:text-gray-400">Contact</a>
    </nav>

    {/* Dropdown menu for small screens when menu is open */}
    {isMenuOpen && (
      <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800">
        <a href="#about" className="block py-2 px-4 hover:bg-gray-700">About</a>
        <a href="#services" className="block py-2 px-4 hover:bg-gray-700">Services</a>
        <a href="#testimonials" className="block py-2 px-4 hover:bg-gray-700">Testimonials</a>
        <a href="#contact" className="block py-2 px-4 hover:bg-gray-700">Contact</a>
      </div>
    )}
  </div>
</header>

        <section className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/hero.jpeg)' }}>
          <div className="text-center bg-black bg-opacity-50 p-8 rounded">
            <motion.h2 
              className="text-4xl font-bold mb-4" 
              initial={{ opacity: 0, y: -50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
            >
              Empowering the Future of Africa
            </motion.h2>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.5 }}
            >
              Providing valuable skills and opportunities to young Africans, empowering them to contribute positively to their communities and the continent&apos;s future.
            </motion.p>
            <motion.a 
              href="#services" 
              className="bg-blue-600 px-4 py-2 rounded inline-block hover:bg-blue-500 transition-all duration-300" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Explore Our Services
            </motion.a>
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

        <InView threshold={0.2}>
          {({ inView, ref }) => (
            <motion.section
              ref={ref}
              id="contact"
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
                <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
                <p className="text-lg mb-4">Get in touch with us to learn more about our programs and how you can get involved.</p>
                <p className="text-lg">Email: contact@skillafrika.com</p>
                <p className="text-lg">Phone: +123 456 7890</p>
              </div>
            </motion.section>
          )}
        </InView>

        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Skill Afrika. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );        
}
