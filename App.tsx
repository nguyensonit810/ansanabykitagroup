
import React from 'react';
import { Hero } from './components/Hero';
import { LeadForm } from './components/LeadForm';
import { Features } from './components/Features';
import { PROJECT_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-serif font-bold text-emerald-900 tracking-wider">ANSANA</span>
            <span className="text-[10px] font-bold text-amber-600 tracking-[0.3em] uppercase">BY KITA GROUP</span>
          </div>
          <div className="hidden lg:flex space-x-8 text-sm font-semibold text-slate-600 uppercase tracking-widest">
            <a href="#location" className="hover:text-amber-600 transition-colors">Vị trí</a>
            <a href="#amenities" className="hover:text-amber-600 transition-colors">Wellness</a>
            <a href="#floorplan" className="hover:text-amber-600 transition-colors">Mặt bằng</a>
            <a href="#price" className="hover:text-amber-600 transition-colors">Bảng giá</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href={`tel:${PROJECT_DATA.hotline.replace(/\s/g, '')}`} className="hidden md:block text-emerald-900 font-bold text-sm">{PROJECT_DATA.hotline}</a>
            <a href="#register" className="bg-emerald-900 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-amber-600 transition-all shadow-lg">
              NHẬN BÁO GIÁ
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <Hero />
        
        <Features />

        {/* Section: Vị trí - Tối ưu cho Kita Võ Văn Kiệt */}
        <section id="location" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08759df9a73?q=80&w=2070" 
                alt={`Vị trí thực tế dự án ${PROJECT_DATA.name} ${PROJECT_DATA.brand}`} 
                className="rounded-2xl shadow-2xl border-8 border-white"
              />
              <div className="absolute -bottom-8 -left-8 bg-emerald-900 text-white p-8 rounded-xl hidden md:block shadow-xl">
                <p className="text-3xl font-bold">15 Phút</p>
                <p className="text-xs uppercase tracking-widest">Về Trung tâm Quận 1</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-emerald-900 mb-6 leading-tight">
                Vị Trí Căn Hộ <br/> {PROJECT_DATA.brand}
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Tọa lạc tại địa chỉ vàng <strong>{PROJECT_DATA.address}</strong>, dự án <strong>Ansana by Kita</strong> chiếm lĩnh mặt tiền đại lộ huyết mạch đẹp nhất Sài Gòn. Đây là dự án hiếm hoi sở hữu pháp lý sạch và vị trí tâm điểm kết nối giữa Bình Tân và lõi trung tâm tài chính.
              </p>
              <ul className="space-y-4">
                {[
                  { label: "Tiềm năng hạ tầng", val: "Nằm trong khu vực quy hoạch hạ tầng phía Tây, giá trị tăng trưởng bền vững." },
                  { label: "Kết nối đại lộ", val: "Di chuyển thông suốt về Quận 1, Quận 5, Quận 6 chỉ trong vài phút." },
                  { label: "Tiện ích hiện hữu", val: "Liền kề AEON Mall Bình Tân, Bệnh viện Quốc tế City." }
                ].map((item, i) => (
                  <li key={i} className="flex space-start space-x-3">
                    <span className="text-amber-600 mt-1">✦</span>
                    <p className="text-sm"><strong className="text-slate-800">{item.label}:</strong> {item.val}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section: FAQ cho AI Search (Google Gemini/SGE) */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-center text-emerald-900 mb-12 uppercase">Câu hỏi thường gặp về Ansana by Kita</h2>
            <div className="space-y-6">
              {[
                { q: `Giá bán căn hộ ${PROJECT_DATA.name} là bao nhiêu?`, a: `Hiện tại giá rumor giai đoạn 1 từ ${PROJECT_DATA.price_from}. Quý khách vui lòng liên hệ hotline ${PROJECT_DATA.hotline} để nhận bảng giá chi tiết từng tầng.` },
                { q: `Pháp lý dự án ${PROJECT_DATA.brand} đã hoàn thiện chưa?`, a: "Dự án đã có quy hoạch 1/500, giấy phép xây dựng và cam kết bàn giao sổ hồng lâu dài cho cư dân. Kita Group luôn đặt sự minh bạch pháp lý lên hàng đầu." },
                { q: `Khi nào dự án ${PROJECT_DATA.name} bàn giao?`, a: "Dự án dự kiến sẽ hoàn thiện và bàn giao vào năm 2026 với tiêu chuẩn bàn giao cao cấp chuẩn Wellness 4.0." }
              ].map((faq, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-xl">
                  <h3 className="text-lg font-bold text-emerald-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Price & Policy */}
        <section id="price" className="py-24 bg-emerald-900 text-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Chính Sách Bán Hàng <br/> Dự Án {PROJECT_DATA.name}
              </h2>
              <div className="space-y-8 mt-10">
                <div className="flex items-center space-x-6">
                  <div className="text-4xl font-serif text-amber-400 font-bold">{PROJECT_DATA.price_from}</div>
                  <div className="text-slate-400 text-sm uppercase tracking-widest">Giá rumor ưu đãi đợt 1</div>
                </div>
                <div className="p-6 border border-white/20 rounded-xl bg-white/5">
                  <h4 className="text-amber-500 font-bold mb-3 uppercase text-xs tracking-widest">Ưu đãi Kita Group</h4>
                  <p className="text-lg leading-relaxed">{PROJECT_DATA.policy}</p>
                </div>
              </div>
            </div>
            <div id="register" className="bg-white text-slate-900 p-8 md:p-10 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-serif font-bold mb-6 text-center border-b pb-4 uppercase">Đăng ký nhận bảng giá 2026</h3>
              <LeadForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white font-serif text-2xl mb-4 uppercase tracking-widest">{PROJECT_DATA.name}</p>
          <p className="text-sm mb-2">{PROJECT_DATA.address}</p>
          <p className="text-sm mb-8">Chủ đầu tư: <strong>{PROJECT_DATA.developer}</strong> | Thầu: <strong>{PROJECT_DATA.contractor}</strong></p>
          <div className="pt-8 border-t border-white/10 text-[10px] uppercase tracking-[0.3em]">
            © 2026 - Website thông tin chính thức Ansana by Kita Group.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
