import React, { useState } from 'react';
// Import các Icon từ thư viện lucide-react (Nhớ chạy npm install lucide-react)
import { LayoutDashboard, BookOpen, Users, Settings, GraduationCap } from 'lucide-react';

// Import các thành phần đã tạo
import BoKhungChinh from './layouts/BoKhungChinh';
import MucSidebar from './components/MucSidebar';
import TheThongKe from './components/TheThongKe';
import BangKhoaHoc from './components/BangKhoaHoc';

function App() {
  return (
    <BoKhungChinh>
      {/* 1. Phần tiêu đề chào mừng */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Bảng điều khiển tổng quan</h2>
        <p className="text-gray-500">Chào mừng bạn quay trở lại hệ thống quản trị bài-tap-2.</p>
      </div>

      {/* 2. Grid Thống kê (TheThongKe) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <TheThongKe 
          tieuDe="Tổng sinh viên" 
          conSo="1,250" 
          mauSac="bg-blue-100 text-blue-600" 
        />
        <TheThongKe 
          tieuDe="Khóa học đang mở" 
          conSo="24" 
          mauSac="bg-green-100 text-green-600" 
        />
        <TheThongKe 
          tieuDe="Dự án hoàn thành" 
          conSo="412" 
          mauSac="bg-purple-100 text-purple-600" 
        />
      </div>

      {/* 3. Khu vực Danh sách môn học (BangKhoaHoc) */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-800">Danh sách môn học mới nhất</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
            + Thêm môn học
          </button>
        </div>
        
        {/* Render bảng dữ liệu */}
        <BangKhoaHoc />
      </div>
    </BoKhungChinh>
  );
}

export default App;