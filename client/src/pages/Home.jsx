import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { services } from '../constants/services';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Digital Honest | Best Advertising Agency in Dehradun</title>
        <meta name="description" content="Offline Ho Ya Online - Brand Sab Jagah! High visibility outdoor branding, transit branding, and digital marketing agency in Dehradun." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-brand-bg relative overflow-hidden">
        {/* Soft Background Gradient Blobs */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-100/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-100/50 rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="z-10"
            >
              <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                <span className="text-brand-orange font-semibold text-sm">#1 Digital + Outdoor Branding</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-brand-text mb-6">
                Offline Ho Ya Online – <br/>
                <span className="gradient-text">Brand Sab Jagah!</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed font-medium">
                Most Trusted & Reliable Advertising Agency of Dehradun, Uttarakhand. Under One Roof.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-brand-blue hover:bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl shadow-blue-900/20 text-center">
                  Start Advertising Today
                </Link>
                <Link to="/services" className="bg-white hover:bg-gray-50 text-brand-blue border-2 border-brand-blue/20 px-8 py-4 rounded-full font-bold text-lg transition-all text-center flex items-center justify-center gap-2">
                  View Services <FiArrowRight />
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                  ))}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  <span className="text-brand-orange font-bold text-lg">500+</span><br/>Brands Grown
                </div>
              </div>
            </motion.div>

            {/* Right Visual (Placeholder for 3D Gen) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[500px] lg:h-[600px] w-full"
            >
              {/* Floating Mockup Replacements CSS until image generation works */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute top-10 right-0 w-3/4 h-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col blur-[0.5px] hover:blur-none transition-all"
              >
                <div className="h-12 bg-gray-100 border-b border-gray-200 flex items-center px-4"><div className="w-1/3 h-4 bg-gray-300 rounded"></div></div>
                <div className="flex-grow bg-gradient-brand flex items-center justify-center p-6 text-center">
                  <div>
                    <h3 className="text-3xl font-black text-white mb-2">YOUR BRAND</h3>
                    <div className="w-1/2 h-1 bg-brand-yellow mx-auto"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="absolute bottom-20 left-0 w-2/3 h-48 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden flex"
              >
                <div className="w-1/3 bg-brand-orange flex items-center justify-center text-white font-bold p-4 text-center leading-tight">MOBILE VAN</div>
                <div className="w-2/3 p-4 bg-gray-50 flex flex-col justify-center">
                  <div className="w-3/4 h-3 bg-gray-200 rounded mb-2"></div>
                  <div className="w-1/2 h-3 bg-gray-200 rounded mb-4"></div>
                  <div className="w-full h-16 bg-brand-blue/10 rounded flex items-center justify-center text-brand-blue font-black text-xl">AD SPACE</div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 right-10 w-32 h-64 bg-black rounded-3xl shadow-2xl border-4 border-gray-800 overflow-hidden"
              >
                <div className="w-full h-full bg-white flex flex-col">
                  <div className="h-10 border-b border-gray-100 flex items-center justify-center"><div className="w-1/2 h-2 bg-gray-200 rounded-full"></div></div>
                  <div className="flex-grow p-4 flex flex-col gap-3">
                    <div className="w-full h-24 bg-brand-yellow rounded-lg"></div>
                    <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                    <div className="w-full h-10 bg-brand-blue rounded-lg mt-auto"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-brand-text mb-4">Our Premium Services</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Complete 360° marketing solutions to explode your brand growth.</p>
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
