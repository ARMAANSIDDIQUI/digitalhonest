import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/917310688048?text=Hello%20Digital%20Honest%2C%20I%20want%20to%20discuss%20advertising%20opportunities.', '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-brand-secondary text-white rounded-full shadow-premium flex items-center justify-center text-2xl hover:scale-110 transition-all border border-brand-secondary/20"
            aria-label="Scroll to top"
          >
            <FiArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={openWhatsApp}
        className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center text-3xl hover:bg-green-600 transition-all shadow-green-500/20"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp />
      </motion.button>
    </div>
  );
}
