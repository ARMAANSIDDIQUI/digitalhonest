import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../constants/services';
import { FiArrowLeft, FiCheckCircle, FiMessageCircle, FiPhoneCall } from 'react-icons/fi';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
        <h2 className="text-3xl font-display mb-4">Service Not Found</h2>
        <Link to="/services" className="btn-primary flex items-center gap-2">
          <FiArrowLeft /> Back to Services
        </Link>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="scroll-container bg-brand-bg min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative pt-14 pb-16 overflow-hidden">
        <div className="section-padding !py-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants} className="space-y-8">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all"
            >
              <FiArrowLeft /> 360° Strategy Hub
            </Link>
            <h1 className="text-5xl lg:text-7xl leading-tight">
              <span className="premium-gradient-text italic font-serif">{service.title}</span>
            </h1>
            <p className="text-xl text-brand-text-muted leading-relaxed max-w-lg font-medium">
              {service.shortDesc}
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <Link to="/contact" className="btn-conversion shadow-2xl shadow-brand-secondary/20 whitespace-nowrap">
                 Launch My Campaign
              </Link>
              <a href="tel:+917310688048" className="btn-primary !bg-white !text-brand-text-main border border-brand-bg shadow-sm">
                Call Strategist
              </a>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="relative lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group"
          >
            <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-text-main/60 via-transparent to-transparent"></div>
            
            {/* Trust Badge */}
            <div className="absolute top-8 right-8 glass-card p-6 !bg-white/90 border-l-4 border-brand-secondary">
               <p className="text-xs font-black uppercase tracking-widest text-brand-text-muted mb-1">Live Evidence</p>
               <p className="text-sm font-bold text-brand-text-main">Proven ROI in {service.features[0]}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-brand-bg py-24">
        <div className="section-padding">
          <motion.div variants={itemVariants} className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl">Comprehensive Solutions</h2>
            <p className="text-brand-text-muted">High-impact features tailored for {service.title}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-card p-8 group hover:bg-white transition-all"
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-all">
                  <FiCheckCircle className="text-brand-primary group-hover:text-white" size={24} />
                </div>
                <h3 className="text-xl mb-2">{feature}</h3>
                <p className="text-sm text-brand-text-muted">Elite level execution and monitoring for maximum ROI.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="section-padding text-center relative z-10 max-w-3xl">
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-4xl lg:text-5xl leading-tight">
              Ready to Scale Your Brand with <span className="premium-gradient-text">{service.id.split('-').join(' ')}</span>?
            </h2>
            <p className="text-xl text-brand-text-muted">
              Join 500+ brands that trust Digital Honest for professional marketing reach.
            </p>
            <div className="pt-8">
              <form className="glass-card p-2 flex flex-col md:flex-row gap-2">
                <input 
                  type="text" 
                  placeholder="Enter Business Name"
                  className="bg-transparent border-none outline-none flex-grow px-6 py-4 font-body"
                />
                <button className="btn-conversion whitespace-nowrap">
                  Get Free Consultation
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl"></div>
      </section>
    </motion.div>
  );
};

export default ServiceDetail;
