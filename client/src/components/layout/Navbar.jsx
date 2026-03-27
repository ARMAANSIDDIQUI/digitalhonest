import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhoneCall } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../../assets/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const isServiceDetail = pathname.startsWith('/services/');
  const forceDarkText = isServiceDetail && !scrolled;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 px-6 sm:px-10 lg:px-12 ${scrolled ? 'pt-4' : 'pt-8'}`}>
      <div className={`max-w-7xl mx-auto transition-all duration-500 ${scrolled ? 'glass-card py-3 !rounded-full px-8' : 'py-0 px-0'}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-none flex items-center justify-center bg-white rounded-xl sm:rounded-2xl shadow-sm group-hover:shadow-premium transition-all duration-500 group-hover:scale-105 overflow-hidden">
              <img src={logo} alt="Digital Honest" className="w-7 h-7 sm:w-9 sm:h-9 aspect-square object-contain" />
            </div>
            <div className="block">
              <h1 className={`text-lg sm:text-xl font-bold leading-none font-display group-hover:text-brand-secondary transition-colors ${scrolled || forceDarkText ? 'text-brand-text-main' : 'text-white'}`}>Digital Honest</h1>
              <p className="text-[7px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-brand-accent font-black mt-0.5 sm:mt-1">DIGITAL MARKETING AGENCY</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-widest font-black transition-all hover:text-brand-secondary relative group ${
                  pathname === link.path 
                    ? 'text-brand-secondary' 
                    : (scrolled || forceDarkText) ? 'text-brand-text-main/70' : 'text-white/70'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all duration-300 group-hover:w-full ${pathname === link.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <Link to="/contact" className="btn-conversion !py-3 !px-8 !text-[11px] uppercase tracking-widest shadow-xl shadow-brand-secondary/10">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden text-2xl p-2 hover:text-brand-secondary transition-colors ${scrolled || forceDarkText ? 'text-brand-text-main' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>


      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 glass-card overflow-hidden shadow-2xl p-4"
          >
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-center text-sm uppercase tracking-widest font-black p-4 rounded-2xl transition-all ${pathname === link.path ? 'bg-brand-secondary/10 text-brand-secondary' : 'text-brand-text-muted hover:bg-brand-bg'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center bg-brand-primary text-white px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest mt-4">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
