
import React, { useState } from 'react';
import { LeadFormData, SubmissionStatus, ApartmentType } from '../types';
import { PROJECT_DATA } from '../constants';

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    email: '',
    interest: '2PN'
  });
  
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePhone = (phone: string) => {
    return /^(0|84)(3|5|7|8|9)([0-9]{8})$/.test(phone.replace(/\s/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      setErrorMessage('Vui lòng nhập Họ tên và Số điện thoại');
      return;
    }
    if (!validatePhone(formData.phone)) {
      setErrorMessage('Số điện thoại chưa đúng định dạng');
      return;
    }

    setErrorMessage('');
    setStatus('submitting');

    try {
      await fetch(PROJECT_DATA.gas_url, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, timestamp: new Date().toLocaleString() })
      });
      
      setStatus('success');
      setFormData({ fullName: '', phone: '', email: '', interest: '2PN' });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Có lỗi hệ thống, vui lòng gọi Hotline.');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12 animate-fade-in">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
        <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">Đăng Ký Thành Công!</h3>
        <p className="text-slate-500 text-sm">Chuyên viên Kita Group sẽ liên hệ lại trong ít phút.</p>
        <button onClick={() => setStatus('idle')} className="mt-8 text-amber-600 font-bold hover:underline">Tiếp tục tìm hiểu</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {errorMessage && <div className="p-3 bg-red-50 text-red-600 text-xs rounded border border-red-200">{errorMessage}</div>}
      
      <div className="relative">
        <input
          type="text"
          placeholder="Họ và tên quý khách"
          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all text-sm"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          disabled={status === 'submitting'}
        />
      </div>

      <div className="relative">
        <input
          type="tel"
          placeholder="Số điện thoại"
          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all text-sm"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          disabled={status === 'submitting'}
        />
      </div>

      <select
        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all text-sm appearance-none cursor-pointer"
        value={formData.interest}
        onChange={(e) => setFormData({ ...formData, interest: e.target.value as ApartmentType })}
        disabled={status === 'submitting'}
      >
        <option value="1PN">Căn hộ 1 Phòng Ngủ</option>
        <option value="2PN">Căn hộ 2 Phòng Ngủ (Phổ biến)</option>
        <option value="3PN">Căn hộ 3 Phòng Ngủ</option>
        <option value="Penthouse">Penthouse Skyview</option>
      </select>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-5 bg-slate-900 text-white font-bold rounded-xl hover:bg-amber-600 transition-all flex items-center justify-center space-x-2 shadow-xl group"
      >
        {status === 'submitting' ? (
          <span className="animate-pulse">ĐANG GỬI THÔNG TIN...</span>
        ) : (
          <span className="group-hover:tracking-widest transition-all">NHẬN BÁO GIÁ & ƯU ĐÃI</span>
        )}
      </button>

      <p className="text-[10px] text-slate-400 text-center uppercase tracking-tighter">
        Cam kết bảo mật thông tin 100% theo quy định Kita Group
      </p>
    </form>
  );
};
