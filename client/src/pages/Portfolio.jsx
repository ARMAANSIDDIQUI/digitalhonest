import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  // Mock portfolio data
  const campaigns = [
    { type: 'Hoarding', brand: 'Premium Car Brand', desc: 'Highway Billboard Dehradun' },
    { type: 'Transit', brand: 'Life Insurance Co.', desc: 'Full Bus Wrap Advertising' },
    { type: 'Digital', brand: 'Local E-commerce', desc: 'Meta Ads Lead Generation' },
    { type: 'Event', brand: 'Music Festival', desc: 'Kiosk & Stage Branding' },
    { type: 'Transit', brand: 'EdTech App', desc: 'Auto Rickshaw Fleet Branding' },
    { type: 'Outdoor', brand: 'Real Estate', desc: 'Airport Lightbox Display' },
  ];

  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
      <Helmet><title>Portfolio | Our Advertising Campaigns</title></Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-4xl lg:text-5xl font-black text-brand-text mb-6">Our Work Speaks</h1>
        <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Take a look at how we've helped brands dominate local offline markets and rapidly scale digital growth.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((camp, i) => (
            <div key={i} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="aspect-[4/3] bg-gradient-brand flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                   <div className="text-center text-white px-6">
                     <span className="text-4xl mb-4 block">{camp.type === 'Transit' ? '🛺' : camp.type === 'Digital' ? '📈' : '🏙️'}</span>
                     <h3 className="text-2xl font-black opacity-80">{camp.type.toUpperCase()}</h3>
                   </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-2">{camp.type} Branding</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{camp.brand}</h4>
                <p className="text-gray-600 text-sm">{camp.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/contact" className="inline-block bg-brand-blue text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-900 transition-colors shadow-xl">
            Want Your Brand Here? Let's Talk!
          </Link>
        </div>
      </div>
    </div>
  );
}
