
import React from 'react';

const testimonials = [
  {
    name: 'أحمد القحطاني',
    role: 'مالك فيلا سكنية',
    quote: 'تجربتي مع لاين كانت مميزة جداً، من التصميم المبتكر وحتى استخراج الرخص. تعامل احترافي ودقة في العمل، أنصح بالتعامل معهم بكل ثقة.',
    img: 'https://picsum.photos/100/100?random=1'
  },
  {
    name: 'سلطان محمد',
    role: 'مستثمر عقاري',
    quote: 'تعامل راقي وسرعة إنجاز، أسعار معقولة جداً مقارنة بجودة العمل. أتمنى لهم دوام التوفيق والنجاح المستمر.',
    img: 'https://picsum.photos/100/100?random=2'
  },
  {
    name: 'خالد العتيبي',
    role: 'مدير مشروع',
    quote: 'طلبت تقرير أضرار فلة، وحضر المهندس من طرفهم وكان رجلاً دقيقاً في عمله، جزاهم الله خيراً تجربة ممتازة.',
    img: 'https://picsum.photos/100/100?random=3'
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-sky-600 font-bold tracking-widest uppercase text-sm">آراء العملاء</span>
        <h2 className="text-4xl font-extrabold text-slate-900 mt-2">ماذا يقول عملاؤنا عنا</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm relative group hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-sky-600 text-white flex items-center justify-center rounded-xl rotate-12 group-hover:rotate-0 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V4H21.017V15C21.017 18.866 17.883 22 14.017 22V21H14.017ZM3.017 21V18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017V4H10.017V15C10.017 18.866 6.88301 22 3.017 22V21H3.017Z" />
                </svg>
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full border-2 border-sky-100" />
                <div className="text-right">
                  <p className="font-bold text-slate-900">{item.name}</p>
                  <p className="text-xs text-sky-600">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
