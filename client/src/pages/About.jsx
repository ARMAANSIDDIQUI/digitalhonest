import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUsers, FiTrendingUp, FiMapPin, FiAward } from 'react-icons/fi';
import aboutImg from '../assets/office_branding_concept_1774478165389.png';

export default function About() {
  return (
    <div className="bg-white min-h-screen font-body">
      <Helmet>
        <title>Our Story | Digital Honest - Marketing Architecture</title>
        <meta name="description" content="Discover the philosophy behind Dehradun's most trusted 360° marketing agency. We build architectures for brand growth." />
      </Helmet>

      {/* Hero Section - High-Fidelity Editorial */}
      <section className="relative min-h-screen w-full flex items-center py-24 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="section-padding relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-8">
              <span className="w-2 h-2 bg-brand-secondary rounded-full"></span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-text-muted">Marketing Architecture</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl mb-10 leading-[1] tracking-tighter">
              Apne Brand Ko <br />
              <span className="premium-gradient-text italic font-serif">Bada Banao</span>
            </h1>
            
            <p className="text-xl text-brand-text-muted leading-relaxed font-medium mb-12 max-w-xl">
              Digital Honest is not just an agency; it's a strategic hub where physical mass-visibility meets precision digital infrastructure. We build the architecture that allows brands to scale without limits.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="glass-card !p-8 !rounded-[2.5rem] border-none">
                <p className="text-5xl font-black text-brand-secondary mb-2">500+</p>
                <p className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted opacity-60">Brands Elevated</p>
              </div>
              <div className="glass-card !p-8 !rounded-[2.5rem] border-none">
                <p className="text-5xl font-black text-brand-primary mb-2">10+</p>
                <p className="text-[10px] uppercase tracking-widest font-black text-brand-text-muted opacity-60">Years Tenure</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-square lg:aspect-[4/4.5] rounded-[3.5rem] overflow-hidden shadow-2xl relative">
              <img src={aboutImg} alt="Our Philosophy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-8 -left-8 glass-card !p-8 !rounded-[2.5rem] shadow-2xl max-w-[280px] reveal-up">
              <p className="text-xl font-serif italic text-brand-text-main leading-tight mb-4">"Brand Sab Jagah!"</p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-secondary">Core Philosophy</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-32 mt-20">
        <div className="section-padding">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <div className="max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-secondary mb-6">Our DNA</p>
              <h2 className="text-5xl lg:text-7xl tracking-tighter leading-[0.9]">High Impact. <br/><span className="text-brand-text-muted/30">Honest Results.</span></h2>
            </div>
            <p className="text-lg text-brand-text-muted font-medium max-w-sm leading-relaxed">
              We eliminate the noise. No fluff, no vanity metrics. Just direct architectural growth for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: "360° Lifecycle",
                desc: "Assistance from Brand Launch to national Promotion. We handle the entire growth pipeline.",
                icon: <FiTrendingUp size={32} />
              },
              {
                title: "Asset Dominance",
                desc: "High-impact highway hoardings, transit moving media, and premium cinema placements.",
                icon: <FiMapPin size={32} />
              },
              {
                title: "Data Precision",
                desc: "Custom audience targeting ensuring zero waste and maximum conversion on digital spends.",
                icon: <FiCheckCircle size={32} />
              }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="w-20 h-20 rounded-3xl bg-brand-bg flex items-center justify-center text-brand-secondary mb-8 transition-all duration-500 group-hover:bg-brand-secondary group-hover:text-white group-hover:scale-110 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-brand-text-muted leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* States / Presence Bar */}
      <section className="py-24 bg-brand-bg">
        <div className="section-padding">
           <div className="glass-card !rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-[80px]"></div>
             <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-secondary mb-4">Our Presence</p>
                  <h3 className="text-4xl lg:text-5xl tracking-tighter mb-6 underline decoration-brand-secondary/30 underline-offset-8">National Footprint</h3>
                  <p className="text-brand-text-muted font-medium text-lg leading-relaxed mb-10 max-w-xl">Headquartered in Dehradun, our operational network expands across 8+ states, dominating major transit routes and city hubs.</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {['UK', 'UP', 'Delhi', 'PB', 'HR', 'RJ', 'MP', 'MH'].map(s => (
                       <span key={s} className="px-4 py-2 bg-white rounded-full text-[10px] font-black uppercase tracking-widest border border-gray-100 shadow-sm">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                   <div className="aspect-square bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-center shadow-premium rotate-3">
                      <p className="text-4xl lg:text-5xl font-black text-brand-primary">8+</p>
                      <p className="text-[10px] uppercase font-black text-brand-text-muted tracking-widest mt-2 leading-none">Active States</p>
                   </div>
                   <div className="aspect-square bg-brand-text-main rounded-3xl p-6 sm:p-8 flex flex-col justify-center shadow-xl -rotate-3">
                      <p className="text-4xl lg:text-5xl font-black text-brand-secondary">24/7</p>
                      <p className="text-[10px] uppercase font-black text-white/50 tracking-widest mt-2 leading-none">Ops Command</p>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
