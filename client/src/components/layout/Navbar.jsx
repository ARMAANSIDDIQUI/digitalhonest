import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhoneCall } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-xl leading-none group-hover:scale-105 transition-transform">
              DH
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight font-display text-brand-text-main">Digital Honest</h1>
              <p className="text-[10px] uppercase tracking-wider text-brand-secondary font-bold">Advertising Agency</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-brand-primary ${pathname === link.path ? 'text-brand-primary' : 'text-brand-text-muted'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-conversion !py-2.5 !px-6 flex items-center gap-2">
              <FiPhoneCall /> Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-2xl text-brand-text-main p-2"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-brand-bg overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block text-lg font-bold p-3 rounded-xl transition-all ${pathname === link.path ? 'bg-brand-primary/5 text-brand-primary' : 'text-brand-text-muted hover:bg-brand-bg'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="block w-full text-center bg-brand-secondary text-white px-6 py-4 rounded-xl font-bold mt-4 shadow-lg shadow-brand-secondary/20">
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
