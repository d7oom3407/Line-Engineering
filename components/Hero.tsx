
import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative h-screen min-h-[850px] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image - Modern Architecture */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[30000ms] scale-110 animate-ken-burns" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2070')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/60 to-slate-950/95"></div>
      </div>

      {/* Content - Added padding top to clear fixed navbar */}
      <div className="relative z-10 text-center px-4 max-w-6xl pt-32 md:pt-40">
        <div className="mb-14 flex justify-center opacity-0 animate-fade-in-up">
           <div className="relative group">
              {/* Dynamic Glow */}
              <div className="absolute -inset-20 bg-sky-500/20 blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-96 md:h-96 transition-all duration-1000 group-hover:scale-105 drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                <Logo />
              </div>
           </div>
        </div>
        
        <div className="opacity-0 animate-fade-in-up [animation-delay:400ms]">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
            نحن نرسم <span className="text-sky-400">الخطوط</span> <br/>التي تبني مستقبلك
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-14 font-medium leading-relaxed max-w-3xl mx-auto">
            مكتب لاين للاستشارات الهندسية - وجهتكم للابتكار المعماري، الدقة الإنشائية، والتميز المهني في قلب المملكة.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="px-14 py-6 bg-white text-slate-950 font-black rounded-2xl shadow-2xl hover:bg-sky-50 hover:-translate-y-1 transition-all flex items-center justify-center gap-4 text-xl"
            >
              <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              تحدث مع مهندس
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleScroll(e, 'services')}
              className="px-14 py-6 bg-white/10 backdrop-blur-2xl border-2 border-white/20 text-white font-black rounded-2xl hover:bg-white/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-4 text-xl"
            >
              خدماتنا الهندسية
            </a>
          </div>
        </div>
      </div>
      
      {/* Refined Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white text-[10px] uppercase tracking-[0.4em] font-bold">اكتشف المزيد</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent animate-pulse"></div>
      </div>

      <style>{`
        @keyframes ken-burns {
          from { transform: scale(1); }
          to { transform: scale(1.3); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-ken-burns { animation: ken-burns 30s ease-in-out infinite alternate; }
        .animate-fade-in-up { animation: fade-in-up 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
      `}</style>
    </div>
  );
};

export default Hero;
