
import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Language, translations } from '../translations';

interface BlogProps {
  currentLang: Language;
}

const blogImages = [
  'https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800'
];

const Blog: React.FC<BlogProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const isRtl = t.dir === 'rtl';

  return (
    <section className="py-32 bg-white dark:bg-slate-950 animate-in fade-in duration-700" dir={t.dir}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16 text-start">
          <h2 className="text-4xl lg:text-6xl font-bold font-outfit text-slate-900 dark:text-white mb-6">
            {t.blog.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            {t.blog.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.blog.posts.map((post, i) => (
            <div key={i} className="group cursor-pointer flex flex-col h-full">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-900 mb-6 border border-slate-100 dark:border-white/5">
                <img 
                  src={blogImages[i]} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="flex-1 space-y-4 text-start">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> June {10 + i}, 2024</span>
                  <span className="flex items-center gap-1.5"><User size={14} /> Admin</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <button className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:underline pt-2">
                  {t.blog.readMore}
                  <ArrowRight size={16} className={isRtl ? 'rotate-180' : ''} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
