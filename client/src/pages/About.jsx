import { Helmet } from 'react-helmet-async';
import { FiCheckCircle, FiUsers, FiTrendingUp, FiMapPin } from 'react-icons/fi';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <Helmet><title>About Us | Digital Honest & Shri Media</title></Helmet>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-brand-text mb-6">Apne Brand Ko Bada Banao</h1>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to Digital Honest & Shri Media, Dehradun's premier 360° marketing agency. We bridge the gap between traditional high-impact outdoor branding and hyper-targeted digital marketing.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-brand-blue text-white py-16 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Years Experience', value: '10+', icon: <FiTrendingUp className="text-3xl text-brand-orange mx-auto mb-4" /> },
              { label: 'Brands Elevated', value: '500+', icon: <FiUsers className="text-3xl text-brand-orange mx-auto mb-4" /> },
              { label: 'Cities Covered', value: '15+', icon: <FiMapPin className="text-3xl text-brand-orange mx-auto mb-4" /> },
              { label: 'Client Satisfaction', value: '99%', icon: <FiCheckCircle className="text-3xl text-brand-orange mx-auto mb-4" /> },
            ].map((stat, i) => (
              <div key={i} className="p-6">
                {stat.icon}
                <div className="text-4xl font-black mb-2">{stat.value}</div>
                <div className="text-sm text-blue-200 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6">Why Choose Us?</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We don't just sell ad space; we deliver growth. Whether it's a massive highway hoarding that catches every eye, a moving transit ad on an auto, or a precision-targeted Google Ads campaign, we manage "Brand Launch se lekar Promotion tak Full Support."
            </p>
            <ul className="space-y-4">
              {[
                "End-to-End Campaign Management",
                "Largest Network of Outdoor Media in Uttarakhand",
                "Data-Driven Digital Marketing Strategies",
                "Transparent Reporting & Honest Pricing"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-gray-800">
                  <FiCheckCircle className="text-brand-orange text-xl" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl shadow-brand-blue/5 border border-gray-100 relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/20 rounded-bl-full -z-10"></div>
             <h3 className="text-2xl font-black text-brand-blue mb-6">Our Core Promise</h3>
             <p className="text-2xl text-gray-800 italic font-medium leading-relaxed">
               "Offline ho ya Online — Brand Sab Jagah! We make your business the most visible brand in your city."
             </p>
             <div className="mt-8 pt-8 border-t border-gray-100">
               <div className="font-bold text-lg">Digital Honest Team</div>
               <div className="text-brand-orange text-sm mt-1">Founders, Shri Media</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
