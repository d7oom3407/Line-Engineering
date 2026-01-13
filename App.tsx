
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      
      {/* Floating Action Buttons - Resized for better mobile UX */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col gap-3 z-50">
        <a 
          href="https://wa.me/966533406000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.96-2.626-.087-.114-.694-.925-.694-1.769 0-.844.434-1.258.589-1.444.155-.187.337-.234.45-.234.113 0 .225.001.321.005.102.004.234-.039.366.279.135.324.463 1.127.503 1.21.041.083.068.181.013.29-.055.109-.083.177-.165.273-.082.096-.172.215-.245.289-.082.083-.169.174-.073.34.097.165.43.709.923 1.149.635.567 1.168.742 1.334.825.166.083.262.069.36-.042.097-.11.417-.484.529-.65.113-.165.226-.138.38-.083.155.055.978.462 1.146.546.169.083.282.124.324.195.042.071.042.411-.103.816zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.179l-1.435 5.235 5.351-1.404C8.75 21.683 10.313 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.477 0-2.852-.404-4.027-1.105l-.289-.174-2.99.785.799-2.912-.19-.302C4.551 15.116 4 13.621 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
          </svg>
        </a>
        <a 
          href="tel:+966533406000" 
          className="bg-sky-600 hover:bg-sky-700 text-white p-3 md:p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="Call"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;
