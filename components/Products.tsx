
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Language, translations } from '../translations';
import { ShoppingCart, CheckCircle, ShieldCheck, Star } from 'lucide-react';

interface ProductsProps {
  currentLang: Language;
}

const Products: React.FC<ProductsProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState<string>('All');

  const filtered = activeTab === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeTab);

  return (
    <section id="products" className="py-32 bg-white dark:bg-slate-950" dir={t.dir}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold font-outfit text-slate-900 dark:text-white">
            {t.products.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl flex flex-wrap justify-center gap-1">
            {Object.entries(t.products.categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(label)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all uppercase tracking-wider ${
                  activeTab === label 
                    ? 'bg-white dark:bg-slate-800 text-blue-600 shadow-md shadow-black/5' 
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((product) => (
            <div key={product.id} className="group glass bg-white dark:bg-transparent border border-black/5 dark:border-white/5 rounded-[2.5rem] p-4 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
              <div className="aspect-[1/1] overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-900 mb-6 border border-slate-100 dark:border-white/5 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Visual Badges for Trust */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-[10px] font-bold rounded-full flex items-center gap-1 shadow-lg">
                  <CheckCircle size={12} />
                  {t.products.stock}
                </div>
                
                {product.isAuthentic && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600/90 text-white text-[9px] font-bold rounded-full flex items-center gap-1 shadow-lg backdrop-blur">
                    <ShieldCheck size={11} />
                    GENUINE
                  </div>
                )}
              </div>
              
              <div className="px-2 space-y-3 text-start flex-1">
                <div className="flex justify-between items-center">
                   <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{product.category}</p>
                   <div className="flex text-yellow-500">
                     {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                   </div>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight h-12 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between pt-4 mt-auto">
                  <p className="text-xl font-bold text-slate-900 dark:text-white">{product.price}</p>
                  <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all shadow-lg shadow-blue-500/30 active:scale-95 group/btn relative">
                    <ShoppingCart size={18} />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
