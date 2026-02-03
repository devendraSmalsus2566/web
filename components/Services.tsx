
import React from 'react';
import { Language, translations } from '../translations';
import { PencilRuler, Zap, Boxes, Wrench } from 'lucide-react';

const icons = [Boxes, PencilRuler, Zap, Wrench];

interface ServicesProps {
  currentLang: Language;
}

const Services: React.FC<ServicesProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="services" className="py-32 bg-slate-50 dark:bg-slate-900/50" dir={t.dir}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold font-outfit text-slate-900 dark:text-white">{t.services.title}</h2>
          <p className="text-slate-600 dark:text-slate-400">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {t.services.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="space-y-6 text-start">
                <div className="w-16 h-16 bg-blue-600/10 rounded-3xl flex items-center justify-center text-blue-600">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">{service.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
