import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';
import logo from '../../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-text-main text-white pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[120px] -z-0 translate-x-1/2 translate-y-1/2"></div>

      <div className="section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">

          {/* Brand Column */}
          <div className="space-y-10">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex-none flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-500 overflow-hidden">
                <img src={logo} alt="Digital Honest" className="w-11 h-11 aspect-square object-contain" />
              </div>
              <div>
                <h2 className="text-2xl font-bold leading-none font-display tracking-tight">Digital Honest</h2>
                <p className="text-[9px] uppercase tracking-[0.4em] text-brand-accent font-black mt-2">DIGITAL MARKETING AGENCY</p>
              </div>
            </Link>
            <p className="text-brand-text-muted leading-relaxed max-w-xs font-medium text-sm">
              India's premier 360° marketing hub. Dominating the physical and digital landscape with architectural precision and "Full Support" growth strategy.
            </p>
            <div className="flex space-x-4">
              {[FiFacebook, FiInstagram, FiTwitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white hover:text-brand-text-main transition-all duration-500 border border-white/10 shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-black text-brand-secondary mb-10">Navigation</h3>
            <ul className="space-y-5">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`} className="text-sm font-bold text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-brand-secondary group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-black text-brand-secondary mb-10">Capabilities</h3>
            <ul className="space-y-6">
              {[
                'Digital Performance',
                'High Impact OOH',
                'Moving Branding',
                'Local Dominance',
                'Live Activation',
                'Omnichannel Hybrid'
              ].map((cap) => (
                <li key={cap} className="text-sm font-bold text-white/50 hover:text-white transition-colors cursor-default">
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-black text-brand-secondary mb-10">Connect</h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <FiMapPin className="mt-1 text-brand-secondary shrink-0" />
                <span className="text-sm font-medium text-white/70 leading-relaxed">
                  ISBT Road Mandi, Dehradun,<br /> Uttarakhand 248001 India
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FiPhone className="text-brand-secondary shrink-0" />
                <a href="tel:+917310688048" className="text-lg font-black hover:text-brand-secondary transition-colors">+91 73106 88048</a>
              </li>
              <li className="flex items-center gap-4">
                <FiMail className="text-brand-secondary shrink-0" />
                <a href="mailto:digitalhonest@gmail.com" className="text-sm font-bold border-b border-white/10 hover:border-brand-secondary transition-colors pb-1">digitalhonest@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.3em] font-black text-white/30">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>&copy; {currentYear} Digital Honest. Brand Sab Jagah!</p>
            <a href="https://armaansiddiqui.online" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-white transition-colors">Architecture by Armaan Siddiqui</a>
          </div>
          <div className="flex space-x-10">
            <Link to="/privacy" className="hover:text-brand-secondary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-secondary transition-colors">Terms of Service</Link>
            {/* <Link to="/admin/login" className="px-4 py-2 bg-white/5 rounded-full hover:bg-white/10 transition-all border border-white/5">Studio Registry</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
