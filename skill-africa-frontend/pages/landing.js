import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Skill Afrika</title>
        <meta name="description" content="Empowering young Africans with skills and opportunities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 min-h-screen">
        <header className="bg-blue-600 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Skill Afrika</h1>
            <nav>
              <a href="#about" className="px-4">About</a>
              <a href="#services" className="px-4">Services</a>
              <a href="#contact" className="px-4">Contact</a>
            </nav>
          </div>
        </header>

        <section className="bg-cover bg-center h-screen text-white flex items-center justify-center" style={{ backgroundImage: 'url(/hero.jpg)' }}>
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Empowering the Future of Africa</h2>
            <p className="text-xl mb-8">Providing valuable skills and opportunities to young Africans, empowering them to contribute positively to their communities and the continent's future.</p>
            <a href="#services" className="bg-blue-600 px-4 py-2 rounded">Explore Our Services</a>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">About Us</h2>
            <p className="text-lg mb-4">Skill Afrika serves as a catalyst for youth development and national growth by providing valuable skills and opportunities to young Africans.</p>
            <p className="text-lg">Our mission is to empower the youth to contribute positively to their communities and the continent's future.</p>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-200">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded shadow">
                <h3 className="text-2xl font-bold mb-4">Skill Training</h3>
                <p>We offer comprehensive training programs in various fields to equip young Africans with the necessary skills to succeed.</p>
              </div>
              <div className="bg-white p-8 rounded shadow">
                <h3 className="text-2xl font-bold mb-4">Mentorship</h3>
                <p>Our mentorship programs connect young individuals with experienced professionals for guidance and support.</p>
              </div>
              <div className="bg-white p-8 rounded shadow">
                <h3 className="text-2xl font-bold mb-4">Job Placement</h3>
                <p>We assist our trainees in finding job opportunities that match their skills and aspirations.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="text-lg mb-4">Get in touch with us to learn more about our programs and how you can get involved.</p>
            <p className="text-lg">Email: contact@skillafrika.com</p>
            <p className="text-lg">Phone: +123 456 7890</p>
          </div>
        </section>

        <footer className="bg-blue-600 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Skill Afrika. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
