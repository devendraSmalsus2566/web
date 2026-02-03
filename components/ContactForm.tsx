
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { Language, translations } from '../translations';

interface ContactFormProps {
  currentLang: Language;
}

const ContactForm: React.FC<ContactFormProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const isRtl = t.dir === 'rtl';

  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Sales Enquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', subject: 'Sales Enquiry', message: '' });
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-100 dark:bg-slate-950 transition-colors duration-300" dir={t.dir}>
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-12 text-start">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold font-outfit text-slate-900 dark:text-white">
                {t.contact.title.split(' ')[0]} <span className="text-blue-500">{t.contact.title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md">
                {t.contact.subtitle}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600 transition-all flex-shrink-0">
                  <Mail className="text-blue-500 group-hover:text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg">{t.contact.email}</h4>
                  <p className="text-slate-600 dark:text-slate-400">sales@trilochanainfotech.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600 transition-all flex-shrink-0">
                  <Phone className="text-blue-500 group-hover:text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg">{t.contact.call}</h4>
                  <p className="text-slate-600 dark:text-slate-400">+91 (120) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600 transition-all flex-shrink-0">
                  <MapPin className="text-blue-500 group-hover:text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg">{t.contact.hq}</h4>
                  <p className="text-slate-600 dark:text-slate-400">Trilochana Solutions Park, Noida</p>
                </div>
              </div>
            </div>

            <div className="p-6 glass border-black/5 dark:border-white/5 rounded-3xl bg-blue-600/5 dark:bg-blue-600/5">
              <h5 className="text-blue-600 dark:text-blue-400 font-bold mb-2 flex items-center gap-2">
                <CheckCircle size={16} /> Global Shipping
              </h5>
              <p className="text-sm text-slate-500">We deliver our industrial and desktop printers to over 45 countries with full setup support.</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            {formState === 'success' ? (
              <div className="glass border-black/10 dark:border-white/10 rounded-3xl p-12 h-full flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95 duration-500 bg-white dark:bg-transparent shadow-xl">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-green-500" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.contact.form.success}</h3>
                <p className="text-slate-600 dark:text-slate-400">{t.contact.form.successDesc}</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="px-8 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass border-black/10 dark:border-white/10 rounded-3xl p-8 lg:p-10 space-y-6 shadow-2xl bg-white dark:bg-slate-900/50 text-start">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">{t.contact.form.name}</label>
                    <input 
                      required
                      type="text" 
                      placeholder="..."
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-50 dark:bg-slate-900/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all text-slate-900 dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">{t.contact.form.email}</label>
                    <input 
                      required
                      type="email" 
                      placeholder="..."
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-50 dark:bg-slate-900/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">{t.contact.form.subject}</label>
                  <select 
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 appearance-none transition-all text-slate-900 dark:text-white"
                  >
                    <option>Sales Enquiry</option>
                    <option>Technical Support</option>
                    <option>3D Printing Service Quote</option>
                    <option>AMC & Maintenance</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">{t.contact.form.message}</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none text-slate-900 dark:text-white"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed rounded-xl text-white font-bold transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3 group"
                >
                  {formState === 'loading' ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <span>{t.contact.form.send}</span>
                      <Send size={18} className={`group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
