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
    const message = encodeURIComponent("Hi Digital Honest! 🔥 I'm interested in scaling my brand's visibility. Let's discuss a strategy session! #BrandSabJagah");
    window.open(`https://wa.me/919412246080?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-24 md:bottom-8 right-6 md:right-8 z-[60] flex flex-col gap-4">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="w-12 h-12 md:w-14 md:h-14 bg-brand-primary text-white rounded-full shadow-premium flex items-center justify-center text-xl md:text-2xl hover:scale-110 active:scale-95 transition-all border border-white/10"
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
        className="flex w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg items-center justify-center text-3xl hover:bg-green-600 transition-all shadow-green-500/20 group relative"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute -top-12 right-0 bg-brand-text-main text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0 shadow-xl border border-white/10">
          Chat Strategy
        </span>
        <FaWhatsapp />
      </motion.button>
    </div>
  );
}
