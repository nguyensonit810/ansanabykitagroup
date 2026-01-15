
import React from 'react';
import { PROJECT_DATA } from '../constants';

const VALUES = [
  {
    title: `Vị Trí ${PROJECT_DATA.brand}`,
    desc: "Tọa lạc tại mặt tiền đại lộ Võ Văn Kiệt, kết nối trung tâm Quận 1 và khu Đông chỉ trong 15-20 phút.",
    icon: "💎"
  },
  {
    title: "Chủ Đầu Tư Kita Group",
    desc: "Thương hiệu Kita Group uy tín toàn cầu, bảo chứng cho tiến độ xây dựng và pháp lý sổ hồng lâu dài.",
    icon: "🏗️"
  },
  {
    title: "Tiêu Chuẩn Wellness 4.0",
    desc: "Căn hộ xanh thông minh, ứng dụng công nghệ lọc không khí và nước sạch tiêu chuẩn resort 5 sao.",
    icon: "🌱"
  },
  {
    title: "Xây Dựng Bởi Newtecons",
    desc: "Chất lượng công trình vượt trội được đảm bảo bởi tổng thầu Newtecons - Top 1 thầu xây dựng Việt Nam.",
    icon: "🏗️"
  },
  {
    title: "Pháp Lý Hoàn Thiện 100%",
    desc: "Dự án đã có đủ phê duyệt 1/500 và giấy phép xây dựng, mang lại sự an tâm tuyệt đối cho giới đầu tư.",
    icon: "📜"
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="values">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-4 uppercase tracking-tight">
            5 GIÁ TRỊ VÀNG TẠI ANSANA BY KITA
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">Vì sao giới tinh hoa chọn dự án <strong>Kita Võ Văn Kiệt</strong> là nơi an cư và đầu tư bền vững nhất 2026?</p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {VALUES.map((f, i) => (
            <div key={i} className="group text-center p-8 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-2xl transition-all duration-500 bg-slate-50">
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <h3 className="text-lg font-bold mb-3 font-serif text-emerald-900">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
