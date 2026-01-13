
import React, { useState } from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      // Reset status after a few seconds
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 text-right">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <div className="mb-8 flex flex-col items-center">
              <div className="w-32 h-32 transition-transform hover:scale-110 duration-500 drop-shadow-lg">
                <Logo color="#ffffff" />
              </div>
              <span className="text-xs font-black tracking-[0.3em] uppercase mt-2 text-sky-400">
                Line Consultancy
              </span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              نحن مكتب لاين للاستشارات الهندسية، نقدم خبراتنا لتطوير البيئة العمرانية في المملكة عبر حلول هندسية مبتكرة ومستدامة تتماشى مع رؤية 2030.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-black mb-8 border-r-4 border-sky-500 pr-4">روابط سريعة</h3>
            <ul className="space-y-5 text-slate-400 text-lg">
              <li><a href="#home" className="hover:text-white hover:translate-x-[-8px] inline-block transition-all">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-white hover:translate-x-[-8px] inline-block transition-all">من نحن</a></li>
              <li><a href="#services" className="hover:text-white hover:translate-x-[-8px] inline-block transition-all">خدماتنا</a></li>
              <li><a href="#contact" className="hover:text-white hover:translate-x-[-8px] inline-block transition-all">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-black mb-8 border-r-4 border-sky-500 pr-4">تواصل معنا</h3>
            <ul className="space-y-6 text-slate-400 text-lg">
              <li className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <span>الرياض، حي الوادي، طريق ابي بكر الصديق</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-2xl">📞</span>
                <a href="tel:0533406000" className="hover:text-sky-400 transition-colors" dir="ltr">0533406000</a>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-2xl">✉️</span>
                <a href="mailto:line.consultings@gmail.com" className="hover:text-sky-400 transition-colors">line.consultings@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-xl font-black mb-8 border-r-4 border-sky-500 pr-4">النشرة البريدية</h3>
            <p className="text-slate-400 text-lg mb-6">كن أول من يعرف عن مشاريعنا الجديدة وتحديثاتنا.</p>
            <div className="flex flex-col gap-4">
              {status === 'success' ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 text-emerald-400 font-bold text-center animate-pulse">
                  تم الاشتراك بنجاح! شكراً لك.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                  <input 
                    required
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="بريدك الإلكتروني" 
                    className="bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-right" 
                  />
                  <button 
                    disabled={status === 'loading'}
                    className={`px-8 py-4 rounded-2xl font-black transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3 ${
                      status === 'loading' ? 'bg-slate-800 text-slate-500' : 'bg-sky-600 hover:bg-sky-700 text-white shadow-sky-600/20'
                    }`}
                  >
                    {status === 'loading' ? (
                      <svg className="animate-spin h-5 w-5 text-sky-500" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : 'اشتراك الآن'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900/50 text-center flex flex-col md:flex-row-reverse justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-bold tracking-wide">
            © {new Date().getFullYear()} لاين للاستشارات الهندسية. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-8 text-slate-500 text-sm font-bold">
            <a href="#" className="hover:text-sky-500 transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-sky-500 transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
