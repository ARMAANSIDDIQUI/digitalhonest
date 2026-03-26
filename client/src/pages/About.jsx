import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUsers, FiTrendingUp, FiMapPin, FiAward } from 'react-icons/fi';
import aboutImg from '../assets/office_branding_concept_1774478165389.png';

export default function About() {
  return (
    <div className="pt-16 pb-24 bg-brand-bg min-h-screen">
      <Helmet><title>About Us | Digital Honest</title></Helmet>

      {/* Hero Section - Editorial Style */}
      <section className="section-padding !py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest mb-6">
              <FiAward /> The Authority in 360° Marketing
            </div>
            <h1 className="text-5xl lg:text-7xl mb-8">
              Apne Brand Ko <br />
              <span className="premium-gradient-text italic font-serif">Bada Banao</span>
            </h1>
            <p className="text-xl text-brand-text-muted leading-relaxed font-medium mb-8">
              Digital Honest is Dehradun's premier marketing powerhouse. We bridge the gap between traditional high-impact outdoor branding and hyper-targeted digital precision.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 glass-card !border-none !bg-brand-primary/5">
                <h4 className="text-3xl text-brand-primary mb-1">500+</h4>
                <p className="text-xs uppercase font-bold tracking-widest text-brand-text-muted">Brands Elevated</p>
              </div>
              <div className="p-6 glass-card !border-none !bg-brand-secondary/5">
                <h4 className="text-3xl text-brand-secondary mb-1">10+</h4>
                <p className="text-xs uppercase font-bold tracking-widest text-brand-text-muted">Years Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img src={aboutImg} alt="Our Office" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 glass-card p-8 border-l-8 border-brand-secondary max-w-[280px]">
              <p className="text-lg font-bold leading-tight uppercase tracking-tight italic">"Offline ho ya Online — Brand Sab Jagah!"</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values / Mission */}
      <section className="bg-white py-24">
        <div className="section-padding">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl mb-6">High Impact <br /><span className="text-brand-primary">Honest Results.</span></h2>
            <p className="text-lg text-brand-text-muted font-medium">We don't just sell ad space; we deliver growth. From massive highway hoardings and premium transit assets to precision-targeted digital scaling, we manage your brand's full lifecycle with "Full Support" from Launch to Promotion.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {[
              {
                title: "End-to-End Support",
                desc: "Assistance from the Brand Launch phase to the final Promotion. We handle everything from creative conceptualization to live activations.",
                icon: <FiTrendingUp size={32} />
              },
              {
                title: "Mass Visibility Network",
                desc: "Access prestigious placements at Airports, Malls, and PVR Cinemas, alongside a dominant network of Highway Hoardings.",
                icon: <FiMapPin size={32} />
              },
              {
                title: "Performance Scaling",
                desc: "Our performance marketing team focuses on the 'Sahi Audience' to ensure guaranteed lead generation and brand growth.",
                icon: <FiCheckCircle size={32} />
              }
            ].map((item, i) => (
              <div key={i} className="group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-primary mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:-translate-y-2">
                  {item.icon}
                </div>
                <h4 className="text-xl mb-3">{item.title}</h4>
                <p className="text-brand-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Operational Presence */}
          <div className="bg-brand-bg rounded-[3rem] p-10 lg:p-16">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <h3 className="text-3xl mb-6">Regional Power, <br /><span className="text-brand-primary">National Reach.</span></h3>
                <p className="text-brand-text-muted mb-8 leading-relaxed">Headquartered in Dehradun, we command a strong presence across 8 major Indian states, ensuring your brand "moves" and "grows" wherever the crowd is.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-brand-text-main font-bold">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div> North India Presence
                  </div>
                  <div className="flex items-center gap-3 text-brand-text-main font-bold">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div> West & Central Hubs
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { region: 'North', states: 'Uttarakhand, UP, Delhi NCR, Punjab, Haryana, Rajasthan' },
                  { region: 'Central', states: 'Madhya Pradesh' },
                  { region: 'West', states: 'Maharashtra' }
                ].map((loc, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-white">
                    <p className="text-[10px] uppercase tracking-widest font-black text-brand-primary mb-2">{loc.region} India</p>
                    <p className="text-xs text-brand-text-muted leading-relaxed font-bold">{loc.states}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding !py-24">
        <div className="bg-brand-text-main rounded-[4rem] p-12 lg:p-20 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl mb-8">Ready to <span className="text-brand-secondary italic">Dominate</span> <br />Your Market?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-conversion shadow-none hover:shadow-2xl hover:shadow-brand-secondary/40">Get A Free Audit</button>
              <button className="btn-primary !bg-white/10 backdrop-blur-md border border-white/20 hover:!bg-white/20">View Case Studies</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
