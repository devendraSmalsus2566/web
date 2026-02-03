
import React from 'react';
import { ArrowRight, ShieldCheck, Globe, Clock } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeroProps {
  currentLang: Language;
}

const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const isRtl = t.dir === 'rtl';

  const icons = [ShieldCheck, Globe, Clock];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden" dir={t.dir}>
      {/* Visual Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[160px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-700">
            <h1 className="text-5xl lg:text-7xl font-bold font-outfit tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              {t.hero.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-medium">
              {t.hero.desc}
            </p>
            <div className={`flex flex-wrap gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <a href="#products" className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-500/25 flex items-center gap-3 group">
                {t.hero.cta}
                <ArrowRight className={`group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} size={22} />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-10 pt-4 border-t border-slate-200 dark:border-white/10">
              {t.hero.stats.map((stat, i) => {
                const Icon = icons[i];
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{stat.split(' ').slice(1).join(' ')}</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">{stat.split(' ')[0]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 rotate-2 group hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200" 
                alt="3D Printer Workbench" 
                className="w-full aspect-[4/3] object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Trust Badge overlay */}
              <div className={`absolute bottom-6 ${isRtl ? 'left-6' : 'right-6'} bg-white/90 dark:bg-slate-900/90 backdrop-blur px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 border border-blue-500/20`}>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <ShieldCheck size={28} />
                </div>
                <div className="text-start">
                  <p className="text-xs font-bold text-slate-500 uppercase">Certified Partner</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">ISO 9001 Quality Assured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
