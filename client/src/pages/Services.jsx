import { Helmet } from 'react-helmet-async';
import { services } from '../constants/services';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <Helmet><title>Our Services | Full 360 Marketing Agency</title></Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-brand-text mb-6">Brand Launch Se Lekar Promotion Tak</h1>
          <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium marketing solutions. From high-visibility billboards to hyper-targeted performance marketing under one roof.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {services.map((service, idx) => (
          <div key={service.id} id={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            
            <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
              <div className="inline-block px-4 py-2 rounded-full font-bold text-sm mb-6 bg-white shadow-sm border border-gray-100 text-brand-orange">
                Service {idx + 1}
              </div>
              <h2 className="text-4xl font-black text-brand-text mb-4">{service.title}</h2>
              <p className="text-xl text-brand-blue font-medium mb-8">{service.shortDesc}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {service.features.map((feature, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
                    <FiCheckCircle className="text-green-500 mt-1 shrink-0 text-xl" />
                    <span className="font-semibold text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                Book This Service <FiArrowRight />
              </Link>
            </div>

            <div className={`relative h-[400px] w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
               {/* Placeholder until visual generation works */}
               <div className="absolute inset-0 bg-gradient-brand flex flex-col items-center justify-center p-8 text-center text-white">
                 <div className="text-6xl mb-6 opacity-80">{service.id === 'transit-branding' ? '🚐' : service.id === 'outdoor-branding' ? '🏢' : service.id === 'digital-marketing' ? '📱' : '🎪'}</div>
                 <h3 className="text-3xl font-black mb-4">{service.title}</h3>
                 <div className="w-1/2 h-2 bg-brand-yellow rounded"></div>
                 <p className="mt-6 font-medium text-blue-100">(3D Mockup Generation Pending)</p>
               </div>
            </div>

          </div>
        ))}
      </div>

      {/* Trusted Clients Section added per user request */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 border-t border-gray-200 pt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-brand-text mb-4">Trusted by Top Brands in Uttarakhand</h2>
          <p className="text-gray-600">Delivering excellence across real estate, education, healthcare, and retail sectors.</p>
        </div>
        
        <div className="relative overflow-hidden w-full flex bg-white py-10 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex space-x-12 animate-[marquee_20s_linear_infinite] px-4 whitespace-nowrap">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div key={num} className="font-bold text-2xl text-gray-300 opacity-70 grayscale flex items-center gap-2">
                <FiCheckCircle /> Brand Partner {num}
              </div>
            ))}
             {/* Duplicate for infinite effect */}
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div key={num} className="font-bold text-2xl text-gray-300 opacity-70 grayscale flex items-center gap-2">
                <FiCheckCircle /> Brand Partner {num}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
