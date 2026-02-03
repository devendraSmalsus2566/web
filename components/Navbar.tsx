
import React, { useState, useEffect } from 'react';
import { Printer, Sun, Moon, Languages, ChevronDown, Menu, X } from 'lucide-react';
import { Language, translations } from '../translations';

interface NavbarProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
  onNavigate: (view: 'home' | 'blog') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentLang, onLangChange, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showLangs, setShowLangs] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'hi', label: 'HI' },
    { code: 'mr', label: 'MR' },
    { code: 'gu', label: 'GU' },
    { code: 'ur', label: 'UR' },
  ];

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBlogClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'py-4 glass border-b border-black/5 dark:border-white/5 shadow-sm' : 'py-8 bg-transparent'}`} dir={t.dir}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={handleHomeClick}>
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Printer className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold font-outfit tracking-tight text-slate-900 dark:text-white">
            TRILOCHANA <span className="text-blue-600">INFOTECH</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" onClick={handleHomeClick} className="hover:text-blue-600 transition-colors">{t.nav.home}</a>
            <a href="#products" onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors">{t.nav.printers}</a>
            <a href="#services" onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors">{t.nav.services}</a>
            <a href="#" onClick={handleBlogClick} className="hover:text-blue-600 transition-colors">{t.nav.blog}</a>
          </div>

          <div className="flex items-center gap-4 border-l border-slate-200 dark:border-white/10 pl-8">
            <div className="relative">
              <button 
                onClick={() => setShowLangs(!showLangs)}
                className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors uppercase"
              >
                <Languages size={18} />
                {currentLang}
                <ChevronDown size={14} className={showLangs ? 'rotate-180' : ''} />
              </button>
              {showLangs && (
                <div className="absolute top-full right-0 mt-3 w-32 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-black/5 dark:border-white/5 py-2 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { onLangChange(l.code as any); setShowLangs(false); }}
                      className={`w-full text-left px-5 py-2.5 text-xs font-bold transition-colors ${currentLang === l.code ? 'text-blue-600 bg-blue-50 dark:bg-blue-500/10' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5'}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={toggleTheme} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-colors text-slate-700 dark:text-slate-300">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a href="#contact" onClick={() => onNavigate('home')} className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity">
              {t.nav.contact}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
