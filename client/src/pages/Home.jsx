import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { services } from '../constants/services';
import { useState, useEffect } from 'react';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const imgs = services.map(s => s.image);

  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % imgs.length), 5000);
    return () => clearInterval(timer);
  }, [imgs.length]);

  return (
    <div className="w-full h-full relative group">
      <AnimatePresence mode="wait">
        <motion.img 
          key={index}
          src={imgs[index]} 
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-12 left-12 text-white">
        <p className="text-xs font-bold uppercase tracking-widest mb-3 text-brand-secondary border-l-4 border-brand-secondary pl-4">{services[index].tag || "Service Focus"}</p>
        <h3 className="text-4xl font-display leading-tight whitespace-pre-line">{services[index].title}</h3>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Digital Honest | Best Advertising Agency in Dehradun</title>
        <meta name="description" content="Offline Ho Ya Online - Brand Sab Jagah! High visibility outdoor branding, transit branding, and digital marketing agency in Dehradun." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 bg-brand-bg overflow-hidden">
        {/* Soft Background Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

        <div className="section-padding !py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="z-10 text-center lg:text-left lg:pt-12"
            >
              <div className="inline-flex items-center gap-2 bg-white border border-brand-bg rounded-full px-4 py-1.5 mb-8 shadow-sm">
                <span className="text-brand-primary font-bold text-xs uppercase tracking-tight">#1 Marketing Agency In Uttarakhand</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl mb-8">
                Offline Ho Ya Online – <br/>
                <span className="premium-gradient-text italic">Brand Sab Jagah!</span>
              </h1>
              
              <p className="text-xl text-brand-text-muted mb-10 max-w-lg leading-relaxed lg:mx-0 mx-auto font-medium">
                The most trusted advertising hub in Dehradun. Architectural branding and precision digital scaling.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="btn-conversion shadow-lg shadow-brand-secondary/20">
                  Grow Your Brand Today
                </Link>
                <Link to="/services" className="btn-primary !bg-white !text-brand-text-main border border-brand-bg shadow-sm hover:border-brand-primary/20">
                  Our Services
                </Link>
              </div>

              {/* Stats/Badges */}
              <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start">
                 <div className="flex -space-x-3">
                    {services.slice(0, 4).map((s, i) => (
                      <img key={i} src={s.image} alt="work" className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm bg-gray-100" />
                    ))}
                 </div>
                 <div className="text-left">
                    <p className="text-lg font-bold text-brand-text-main">500+ Local & National Campaigns</p>
                    <p className="text-xs uppercase font-bold text-brand-primary tracking-widest">100% Conversion Focused</p>
                 </div>
              </div>
            </motion.div>

            {/* Right Visual - Interactive Image Carousel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl glass-card aspect-square max-w-[550px] mx-auto hidden lg:block"
            >
              <Carousel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-brand-text mb-4">Our Service Pillars</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Integrated "Digital + Outdoor" solutions with Full Support strategy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-brand-bg rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
              >
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${service.color === 'blue' ? 'bg-blue-100 text-brand-blue' : service.color === 'orange' ? 'bg-orange-100 text-brand-orange' : 'bg-yellow-100 text-yellow-600'} text-2xl font-black group-hover:scale-110 transition-transform`}>
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold font-poppins mb-3 text-brand-text">{service.title}</h3>
                <p className="text-sm font-medium text-brand-orange mb-4">{service.shortDesc}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <FiCheckCircle className="text-green-500 mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={`/services#${service.id}`} className="text-brand-blue font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Know More <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-brand relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjNDAzOTRhIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwbDhfOFpNOCAwTDBfOHoiIHN0cm9rZT0iIzlmYTliMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready to make your brand visible to millions?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Apne brand ki advertising shuru karein aaj hi!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-brand-yellow hover:bg-yellow-400 text-brand-text px-10 py-4 rounded-full font-black text-lg transition-transform hover:scale-105 shadow-xl">
              Get a Free Quote
            </Link>
            <a href="tel:+917310688048" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
              Call 73106 88048
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
