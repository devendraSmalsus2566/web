
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import { Language, translations } from './translations';
import { ShieldCheck, Award, Zap, HeartHandshake } from 'lucide-react';

type ViewState = 'home' | 'blog';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const [view, setView] = useState<ViewState>('home');

  const t = translations[lang];

  useEffect(() => {
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('dir', t.dir);
    document.documentElement.setAttribute('lang', lang);
  }, [lang, t.dir]);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          setView('home');
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  const whyIcons = [ShieldCheck, Award, Zap];

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-blue-500/30 selection:text-blue-200 ${t.dir === 'rtl' ? 'font-urdu' : ''}`}>
      <Navbar currentLang={lang} onLangChange={setLang} onNavigate={setView} />
      
      <main>
        {view === 'home' ? (
          <>
            <Hero currentLang={lang} />
            
            {/* Industry Trust Banner */}
            <div className="bg-slate-100 dark:bg-slate-900 py-12 border-y border-black/5 dark:border-white/5 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all text-[10px] md:text-sm font-semibold tracking-[0.2em] text-slate-500 dark:text-slate-400">
                <div>AEROSPACE</div>
                <div>MED-TECH</div>
                <div>AUTOMOTIVE</div>
                <div>ROBOTICS</div>
                <div>DEFENSE</div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden" dir={t.dir}>
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-5xl font-bold font-outfit text-slate-900 dark:text-white mb-4">
                    {t.trust.whyTitle}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {t.trust.points.map((point, i) => {
                    const Icon = whyIcons[i];
                    return (
                      <div key={i} className="text-start space-y-4 group p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-transparent hover:border-blue-500/20 transition-all">
                        <div className="w-16 h-16 rounded-3xl bg-blue-600/10 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                          <Icon size={32} />
                        </div>
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white">{point.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{point.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            <Products currentLang={lang} />

            {/* Brand Commitment Banner */}
            <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <div className="max-w-7xl mx-auto px-6 relative flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-xl text-start">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <HeartHandshake size={32} />
                  </div>
                  <h2 className="text-4xl font-bold mb-4 font-outfit">Our Commitment to Reliability</h2>
                  <p className="text-blue-100 text-lg">Every printer, cable, and part sold by Trilochana Infotech is tested in our high-load laboratory for 48 hours to ensure zero defects on arrival. We don't just sell hardware; we sell peace of mind.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 flex flex-col items-center">
                   <ShieldCheck size={64} className="mb-4" />
                   <p className="text-2xl font-bold">100% Guaranteed</p>
                   <p className="text-blue-100 text-sm">Industrial Grade Standards</p>
                </div>
              </div>
            </section>

            <Services currentLang={lang} />
            
            <ContactForm currentLang={lang} />

            <section className="py-20 border-t border-black/5 dark:border-white/5 bg-slate-50 dark:bg-slate-950">
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-500 mb-1">500+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Printers Sold</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-500 mb-1">24/7</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Support</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-500 mb-1">15+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Patents</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-500 mb-1">98%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Success</div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <Blog currentLang={lang} />
        )}
      </main>

      <Footer currentLang={lang} />
      <AIAssistant currentLang={lang} />
    </div>
  );
};

export default App;
