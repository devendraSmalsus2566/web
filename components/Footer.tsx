
import React from 'react';
import { Printer, Linkedin, Twitter, Github, Mail, MapPin, Phone } from 'lucide-react';
import { Language, translations } from '../translations';

interface FooterProps {
  currentLang: Language;
}

const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const isRtl = t.dir === 'rtl';

  return (
    <footer className="pt-24 pb-12 bg-slate-950 border-t border-white/5" dir={t.dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className={`flex items-center space-x-2 ${isRtl ? 'space-x-reverse' : ''}`}>
              <Printer className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold font-outfit tracking-tight text-white">
                TRILOCHANA <span className="text-blue-400">INFOTECH</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed text-start">
              {t.footer.desc}
            </p>
            <div className={`flex space-x-4 ${isRtl ? 'space-x-reverse' : ''}`}>
              <a href="#" className="p-2 glass border-white/5 hover:text-blue-500 rounded-lg transition-colors text-white"><Twitter size={18} /></a>
              <a href="#" className="p-2 glass border-white/5 hover:text-blue-500 rounded-lg transition-colors text-white"><Linkedin size={18} /></a>
              <a href="#" className="p-2 glass border-white/5 hover:text-blue-500 rounded-lg transition-colors text-white"><Github size={18} /></a>
            </div>
          </div>

          <div className="text-start">
            <h4 className="font-bold mb-6 text-white">{t.footer.linksTitle}</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-400 transition-colors">{t.nav.home}</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">{t.nav.printers}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t.nav.services}</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div className="text-start">
            <h4 className="font-bold mb-6 text-white">{t.footer.solutionsTitle}</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Aerospace</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Medical</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Automotive</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Education</a></li>
            </ul>
          </div>

          <div className="text-start">
            <h4 className="font-bold mb-6 text-white">{t.footer.hqTitle}</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Sector 62, Noida,<br />Uttar Pradesh 201309, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 flex-shrink-0" />
                <span>+91 (120) 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 flex-shrink-0" />
                <span>contact@trilochanainfotech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] md:text-xs text-slate-600 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          <p>{t.footer.rights}</p>
          <div className={`flex space-x-6 mt-4 md:mt-0 ${isRtl ? 'space-x-reverse' : ''}`}>
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms</a>
            <a href="#" className="hover:text-slate-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
