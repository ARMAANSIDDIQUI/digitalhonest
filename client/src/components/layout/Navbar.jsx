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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-xl leading-none">
              DH
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight font-poppins text-brand-blue">Digital Honest</h1>
              <p className="text-[10px] uppercase tracking-wider text-brand-orange font-semibold">Advertising Agency</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-orange ${pathname === link.path ? 'text-brand-orange' : 'text-gray-700'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-orange-500/30 flex items-center gap-2">
              <FiPhoneCall /> Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-2xl text-brand-blue p-2"
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
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block text-lg font-medium p-2 rounded-lg ${pathname === link.path ? 'bg-orange-50 text-brand-orange' : 'text-gray-700'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="block w-full text-center bg-brand-orange text-white px-6 py-3 rounded-xl font-medium mt-4 shadow-lg shadow-orange-500/20">
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
