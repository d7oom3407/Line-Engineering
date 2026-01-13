
import React, { useState } from 'react';
import Logo from './Logo';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'الرئيسية', id: 'home' },
    { name: 'من نحن', id: 'about' },
    { name: 'خدماتنا', id: 'services' },
    { name: 'اتصل بنا', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, 'home')}
              className="group flex flex-col items-center"
            >
               <div className="h-12 w-12 md:h-16 md:w-16 transition-transform duration-500 group-hover:scale-110">
                  <Logo color={scrolled ? '#0f172a' : '#ffffff'} />
               </div>
               <span className={`text-[8px] md:text-[10px] font-black tracking-[0.2em] mt-1 uppercase transition-colors duration-500 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                 Line Consultancy
               </span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8 space-x-reverse">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-bold transition-all hover:-translate-y-0.5 ${
                    scrolled ? 'text-slate-800 hover:text-sky-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, 'contact')}
                className={`px-8 py-3 rounded-xl text-sm font-black transition-all shadow-xl active:scale-95 ${
                  scrolled 
                  ? 'bg-slate-900 text-white hover:bg-sky-600' 
                  : 'bg-white text-slate-900 hover:bg-sky-50'
                }`}
              >
                احجز موعداً
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-3 rounded-xl transition-colors ${
                scrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10'
              } focus:outline-none`}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen bg-white shadow-2xl border-t border-slate-100' : 'max-h-0'}`}>
        <div className="px-6 pt-6 pb-10 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className="block px-4 py-4 rounded-2xl text-lg font-bold text-slate-800 hover:text-sky-600 hover:bg-sky-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')}
            className="block w-full text-center px-4 py-5 mt-6 bg-slate-900 text-white rounded-2xl font-black shadow-2xl"
          >
            طلب استشارة مجانية
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
