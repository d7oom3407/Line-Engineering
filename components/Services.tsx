
import React, { useState } from 'react';

const services = [
  {
    id: 'pm',
    title: 'إدارة المشاريع',
    desc: 'متابعة دقيقة لكل مراحل التنفيذ لضمان الالتزام بالجدول الزمني والميزانية والجودة المطلوبة.',
    img: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=800&auto=format&fit=crop',
    icon: '📊'
  },
  {
    id: 'lic',
    title: 'التراخيص الإنشائية',
    desc: 'استخراج كافة رخص البناء، الهدم، التسوير والترميم وفق متطلبات الكود السعودي والبلديات.',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop',
    icon: '🏗️'
  },
  {
    id: 'sur',
    title: 'الأعمال المساحية',
    desc: 'الرفع المساحي الدقيق، تحديث الصكوك، وفرز الوحدات العقارية باستخدام أحدث الأجهزة التقنية.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    icon: '📍'
  },
  {
    id: 'des',
    title: 'التصميم الهندسي',
    desc: 'مخططات معمارية وإبداعية متكاملة تشمل التصميم الإنشائي والميكانيكي والكهربائي بدقة.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    icon: '✏️'
  },
  {
    id: 'int',
    title: 'التصميم الداخلي',
    desc: 'تحويل المساحات الصماء إلى فضاءات تنبض بالحياة، ندمج فيها الفخامة مع الاستخدام الوظيفي.',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    icon: '🏠'
  },
  {
    id: 'sup',
    title: 'الإشراف الهندسي',
    desc: 'ضمان مطابقة التنفيذ للمواصفات الفنية والمخططات المعتمدة من خلال زيارات ميدانية دورية.',
    img: 'data:image/jpeg;base64,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',
    icon: '👷'
  },
];

const Services: React.FC = () => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

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
    <div className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-24">
        <span className="text-sky-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-4 block">خدماتنا</span>
        <h2 className="text-3xl md:text-7xl font-black text-slate-900 mb-4 md:mb-8 leading-tight">حلول هندسية <span className="text-sky-600">متكاملة</span></h2>
        <p className="max-w-3xl mx-auto text-slate-500 text-base md:text-xl leading-relaxed px-4">
          نقدم لكم خدمات هندسية تفوق التوقعات وتلبي كافة تطلعاتكم العمرانية وفق أرقى المعايير.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="group bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-500"
          >
            <div className="h-48 md:h-64 overflow-hidden relative bg-slate-900">
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center opacity-40">
                 <span className="text-white/5 text-8xl font-black select-none uppercase">{service.id}</span>
              </div>
              
              {!imgErrors[service.id] ? (
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
                  onError={() => setImgErrors(prev => ({ ...prev, [service.id]: true }))}
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 relative z-10 p-4 text-center">
                  <span className="text-4xl mb-2 opacity-50">{service.icon}</span>
                  <span className="text-white/30 text-xs font-bold uppercase tracking-tighter">الصورة قيد التحديث</span>
                </div>
              )}
              
              <div className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-16 md:h-16 bg-white/95 backdrop-blur rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-lg z-20">
                {service.icon}
              </div>
            </div>
            
            <div className="p-6 md:p-10 text-right flex-1 flex flex-col bg-white z-10 relative">
              <h3 className="text-xl md:text-3xl font-black text-slate-900 mb-3 md:mb-6 group-hover:text-sky-600 transition-colors leading-tight">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 flex-1">
                {service.desc}
              </p>
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, 'contact')}
                className="inline-flex items-center gap-2 md:gap-3 text-sky-600 font-bold text-sm md:text-lg hover:gap-5 transition-all"
              >
                استشارة مجانية
                <svg className="w-5 h-5 md:w-6 md:h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
