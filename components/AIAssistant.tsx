
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';
import { Language } from '../translations';

interface AIAssistantProps {
  currentLang: Language;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  
  const greetings: Record<Language, string> = {
    en: 'Welcome to Trilochana Infotech. I’m your technical sales consultant. How can I help you choose the right 3D printer today?',
    hi: 'त्रिलोचना इन्फोटेक में आपका स्वागत है। मैं आपका तकनीकी बिक्री सलाहकार हूँ। मैं आज आपको सही 3D प्रिंटर चुनने में कैसे मदद कर सकता हूँ?',
    mr: 'त्रिलोचना इन्फोटेक मध्ये आपले स्वागत आहे. मी तुमचा तांत्रिक विक्री सल्लागार आहे. आज तुम्हाला योग्य 3D प्रिंटर निवडण्यात मी कशी मदत करू शकतो?',
    gu: 'ત્રિલોચના ઇન્ફોટેકમાં આપનું સ્વાગત છે. હું તમારો ટેકનિકલ સેલ્સ કન્સલ્ટન્ટ છું. હું તમને આજે યોગ્ય 3D પ્રિન્ટર પસંદ કરવામાં કેવી રીતે મદદ કરી શકું?',
    ur: 'ترلوچنا انفوٹیک میں خوش آمدید۔ میں آپ کا ٹیکنیکل سیلز کنسلٹنٹ ہوں۔ میں آج صحیح 3D پرنٹر منتخب کرنے میں آپ کی کیا مدد کر سکتا ہوں؟'
  };

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Reset messages with localized greeting when language changes
    setMessages([{ role: 'assistant', content: greetings[currentLang] }]);
  }, [currentLang]);

  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getGeminiResponse(textToSend, messages, currentLang);
      setMessages(prev => [...prev, { role: 'assistant', content: response || "..." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const isRtl = currentLang === 'ur';

  return (
    <div className="fixed bottom-6 right-6 z-[60]" dir={isRtl ? 'rtl' : 'ltr'}>
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer relative"
        >
          <MessageCircle className="text-white w-8 h-8" />
        </button>
      ) : (
        <div className="w-[380px] h-[580px] glass rounded-3xl flex flex-col shadow-2xl border-black/10 dark:border-white/20 animate-in zoom-in-95 slide-in-from-bottom-10 overflow-hidden bg-white/95 dark:bg-slate-900/95">
          <div className="p-5 border-b border-black/5 dark:border-white/10 flex items-center justify-between bg-blue-600/10">
            <div className={`flex items-center space-x-3 ${isRtl ? 'space-x-reverse' : ''}`}>
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <Bot className="text-white" size={24} />
              </div>
              <div className="text-start">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">Sales Engineer</h3>
                <p className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">Expert Support</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-xl">
              <X size={20} className="text-slate-500" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'glass bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-bl-none text-slate-800 dark:text-slate-200'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 border-t border-black/5 dark:border-white/10 bg-white dark:bg-slate-900/50">
            <div className="relative">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="..."
                className="w-full bg-slate-50 dark:bg-slate-950 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-all"
              />
              <button 
                onClick={() => handleSend()}
                className={`absolute ${isRtl ? 'left-2' : 'right-2'} top-2 bottom-2 px-3 bg-blue-600 rounded-lg hover:bg-blue-700 text-white`}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
