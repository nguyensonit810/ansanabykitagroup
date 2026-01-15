
import React from 'react';
import { PROJECT_DATA } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background with optimized scale animation */}
      <div 
        className="absolute inset-0 z-0 scale-100 hover:scale-110 transition-transform duration-[15000ms] ease-out"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.35)'
        }}
      />
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl animate-fadeIn">
        <span className="inline-block px-6 py-2 mb-8 text-xs font-bold tracking-[0.4em] uppercase bg-amber-600/90 text-white rounded-full shadow-lg">
          {PROJECT_DATA.status}
        </span>
        {/* H1 Chứa đầy đủ từ khóa chính cho SEO & AI Search */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-[1.1] drop-shadow-2xl">
          ANSANA BY KITA <br/> 
          <span className="text-amber-500">CĂN HỘ CAO CẤP VÕ VĂN KIỆT</span>
        </h1>
        <p className="text-lg md:text-2xl font-light text-slate-200 mb-12 tracking-wide max-w-3xl mx-auto leading-relaxed border-t border-white/20 pt-8">
          Tuyệt tác sống Wellness 4.0 tại tâm điểm <strong>{PROJECT_DATA.brand}</strong>. Không gian sống đẳng cấp thượng lưu từ chủ đầu tư <strong>{PROJECT_DATA.developer}</strong>.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#register" 
            className="w-full sm:w-auto px-12 py-5 bg-amber-600 text-white font-bold rounded shadow-2xl hover:bg-amber-500 transition-all hover:-translate-y-1"
          >
            TẢI BÁNG GIÁ CHI TIẾT
          </a>
          <a 
            href="#location"
            className="w-full sm:w-auto px-12 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded hover:bg-white/20 transition-all"
          >
            VỊ TRÍ DỰ ÁN
          </a>
        </div>
      </div>
    </section>
  );
};
