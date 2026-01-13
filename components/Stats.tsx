
import React from 'react';

const stats = [
  { label: 'متر مربع مصمم', value: '195K+', icon: '📐' },
  { label: 'نسبة رضا العملاء', value: '99%', icon: '⭐' },
  { label: 'مشروع منجز', value: '275+', icon: '🏗️' },
  { label: 'سنوات من الخبرة', value: '09+', icon: '🏆' },
];

const Stats: React.FC = () => {
  return (
    <div className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="text-center p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-5xl md:text-6xl font-black text-white mb-3 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sky-400 font-bold uppercase tracking-widest text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
