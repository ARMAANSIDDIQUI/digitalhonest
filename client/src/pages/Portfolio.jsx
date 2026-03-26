import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiExternalLink, FiSearch } from 'react-icons/fi';
import { services } from '../constants/services';

export default function Portfolio() {
  return (
    <div className="pt-16 pb-24 bg-brand-bg min-h-screen">
      <Helmet><title>Portfolio | Our Best Campaigns</title></Helmet>
      
      <div className="section-padding !py-12 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl lg:text-6xl mb-6">Our Work <span className="premium-gradient-text">Speaks</span></h1>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-brand-text-muted font-medium leading-relaxed">
            Delivering 360° marketing dominance for regional and national brands. High impact, high conversion.
          </p>
        </motion.div>
      </div>

      <div className="section-padding !py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-glass hover:shadow-premium transition-all duration-500 border border-white"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-brand-primary shadow-xl scale-50 group-hover:scale-100 transition-transform duration-500">
                      <FiSearch size={24} />
                   </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">{service.title}</span>
                  <FiExternalLink className="text-brand-text-muted group-hover:text-brand-primary transition-colors" />
                </div>
                <h4 className="text-2xl mb-2 font-display">Regional Brand Campaign</h4>
                <p className="text-brand-text-muted text-sm font-medium">{service.shortDesc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link to="/contact" className="btn-conversion !px-12 !py-5 shadow-2xl">
            Launch Your Campaign Today
          </Link>
        </div>
      </div>
    </div>
  );
}
