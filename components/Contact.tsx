
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          {/* Form */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">تواصل معنا</h2>
            <p className="text-slate-400 mb-8">قم بملء نموذج الإتصال ونحن من سنقوم بالتواصل معك في أقرب وقت ممكن.</p>
            
            {isSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/50 p-8 rounded-2xl text-center animate-fade-in">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">تم الإرسال بنجاح!</h3>
                <p className="text-emerald-100/70">شكراً لتواصلك معنا. سيقوم أحد مهندسينا بالرد عليك في أقرب وقت ممكن.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">الأسم</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" 
                      placeholder="أدخل اسمك الكامل" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">البريد الإلكتروني</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" 
                      placeholder="email@example.com" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">رقم الهاتف</label>
                  <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel" 
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" 
                    placeholder="05xxxxxxxx" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">موضوع الرسالة</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" 
                    placeholder="كيف يمكننا مساعدتك؟"
                  ></textarea>
                </div>
                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className={`w-full font-bold py-4 rounded-lg shadow-lg transform transition flex items-center justify-center gap-3 ${
                    isSubmitting ? 'bg-slate-700 cursor-not-allowed' : 'bg-sky-600 hover:bg-sky-700 hover:-translate-y-1 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      جاري الإرسال...
                    </>
                  ) : 'إرسال الرسالة'}
                </button>
              </form>
            )}
          </div>

          {/* Map & Info */}
          <div className="relative h-[400px] lg:h-auto min-h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.766157140417!2d46.689694675924734!3d24.7691888779893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ef0937a0928db%3A0xc3c6b24057884196!2sLine%20consultancy!5e0!3m2!1sen!2ssa!4v1707914000000!5m2!1sen!2ssa" 
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            ></iframe>
            
            <div className="absolute top-8 left-8 right-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pointer-events-none">
              <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg pointer-events-auto">
                <p className="text-xs text-slate-500 mb-1">الموقع الرئيسي</p>
                <p className="text-sm font-bold text-slate-900">طريق ابي بكر الصديق، الوادي، الرياض</p>
              </div>
              <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg pointer-events-auto">
                <p className="text-xs text-slate-500 mb-1">ساعات العمل</p>
                <p className="text-sm font-bold text-slate-900">الأحد - الخميس: 9ص - 6م</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Contact;
