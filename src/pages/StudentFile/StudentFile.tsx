import React from "react";
import {
  FaUser,
  FaEdit,
  FaInfo,
  FaKey,
  FaDownload,
  FaLock,
  FaShieldAlt,
  FaChartLine,
  FaFileInvoice,
  FaReceipt,
} from "react-icons/fa";

export const StudentFile = () => {
  return (
    <div className="rounded-2xl min-h-screen bg-gradient-to-br from-[#f8f9fc] to-[#f1f5f9] p-4 md:p-8 font-sans text-right">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h1 className="text-4xl font-bold flex items-center gap-2">
          <FaUser className="text-2xl" /> ملف الطالب
        </h1>
        <button
          style={{ fontSize: "18px", gap: "2px" }}
          className="flex border-2 text-3xl font-bold border-[#667eea] text-[#667eea] hover:bg-[#667eea] hover:text-white transition px-6 py-3 rounded-xl text-sm"
        >
          <FaEdit size={24} /> تعديل الملف
        </button>
      </div>

      {/* Grid Container */}
<div className="grid grid-cols-1 gap-6 items-start lg:grid-cols-[minmax(280px,0.4fr)_1fr]">
  {/* Profile Summary */}
  <div className="text-center bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition">
    <h2 className="text-sm mb-1">صورة الطالب</h2>
    <h3 className="text-lg font-semibold text-[26px]">محمد أحمد</h3>
    <p className="text-gray-600 text-sm mt-1 text-[16px]">الثانوية العامة</p>

    <div className="mt-4 flex justify-between gap-6 text-sm text-gray-400">
      <div className="flex flex-col items-center">
        <span className="font-bold text-black text-[22px]">1250</span>
        النقاط
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold text-black text-[22px]">15</span>
        الكورسات
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold text-black text-[22px]">85%</span>
        التقدم
      </div>
    </div>
  </div>

  {/* Account Info */}
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition">
    <h2
      style={{ fontSize: "25px" }}
      className="flex items-center text-xl font-bold text-white bg-gradient-to-l from-[#764ba2] to-[#667eea] rounded-t-lg -m-6 mb-4 p-4"
    >
      <FaInfo className="bg-white w-5 h-5 rounded-full text-[#764ba2] p-[5px]" />
      معلومات الحساب
    </h2>

    <div className="space-y-5 text-[18px]">
      {[
        ["الاسم:", "محمد أحمد علي"],
        ["البريد الإلكتروني:", "mohamed.ahmed@example.com"],
        ["رقم الهاتف:", "01234567890"],
        ["المرحلة الدراسية:", "الثانوية العامة - الصف الثالث"],
        ["تاريخ التسجيل:", "15 يناير 2024"],
      ].map(([label, value]) => (
        <div className="flex gap-4 flex-col md:flex-row md:items-center">
          <span className="font-semibold w-32">{label}</span>
          <span>{value}</span>
        </div>
      ))}

      <div className="flex gap-4 flex-col md:flex-row md:items-center">
        <span className="font-semibold w-32 shrink-0">حالة الحساب:</span>
        <span style={{fontSize:'16px'}} className="font-bold text-white bg-green-700 text-xs px-4 py-0.5 rounded inline-block w-fit whitespace-nowrap">
          نشط
        </span>
      </div>
    </div>
  </div>
</div>


      {/* Reports & Security */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-center w-full">
        {/* الأمان */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition w-full">
          <h2
            style={{ fontSize: "25px" }}
            className="flex items-center text-white bg-gradient-to-l from-[#764ba2] to-[#667eea] rounded-t-lg -m-6 mb-4 p-4 font-bold"
          >
            <FaKey className="w-5 h-5" /> الأمان
          </h2>

          <button
            style={{ fontSize: "18px" }}
            className="flex items-center justify-center bg-[#6c757d] text-white hover:bg-[#5c636a] w-full py-2 rounded mb-4 text-sm font-semibold transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            <FaLock className="w-5 h-5" /> تغيير كلمة المرور
          </button>

          <button
            style={{ fontSize: "18px" }}
            className="w-full flex items-center justify-center text-gray-600 text-sm font-bold py-2 transition duration-300 hover:bg-[#5c636a] hover:text-white rounded"
          >
            <FaShieldAlt className="w-5 h-5" /> تفعيل المصادقة الثنائية
          </button>
        </div>

        {/* التقارير */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition text-center w-full">
          <h2
            style={{ fontSize: "25px" }}
            className="flex items-center text-white bg-gradient-to-l from-[#764ba2] to-[#667eea] rounded-t-lg -m-6 mb-4 p-4 font-bold"
          >
            <FaDownload className="w-5 h-5" /> التقارير
          </h2>

          <button
            style={{ fontSize: "21px" }}
            className="flex items-center justify-center bg-cyan-400 hover:bg-cyan-500 w-full text-white py-2 rounded mb-4 text-sm font-semibold transition duration-300 transform hover:-translate-y-1 hover:text-black"
          >
            <FaChartLine className="w-5 h-5" /> تحميل تقرير التقدم
          </button>

          <button
            style={{ fontSize: "21px" }}
            className="w-full font-bold flex items-center justify-center text-cyan-400 text-sm py-2 rounded transition duration-300 hover:bg-[#0dcaf0] hover:text-black"
          >
            <FaFileInvoice className="h-5 w-5" /> تحميل تقرير الفواتير
          </button>
        </div>
      </div>

      {/* Subscriptions Table */}
      <div className="bg-white mt-6 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition">
        <h2
          style={{ fontSize: "25px" }}
          className="flex items-center text-white bg-gradient-to-l from-[#764ba2] to-[#667eea] rounded-t-lg -m-6 mb-4 p-4 font-bold"
        >
          <FaReceipt className="h-5 w-5" /> سجل الاشتراكات والفواتير
        </h2>
        <table className="w-full text-sm text-right border-collapse">
          <thead>
            <tr className="text-white" style={{ fontSize: "18px" }}>
              <th
                style={{ borderRadius: "0 10px 0 0" }}
                className="p-4 bg-gradient-to-l from-[#764ba2] to-[#667eea]"
              >
                الباقة
              </th>
              <th className="p-4 bg-gradient-to-l from-[#764ba2] to-[#667eea]">التاريخ</th>
              <th
                style={{ borderRadius: "10px 0 0 0" }}
                className="p-4 bg-gradient-to-l from-[#764ba2] to-[#667eea]"
              >
                المبلغ
              </th>
            </tr>
          </thead>
          <tbody>
  <tr
    className="text-gray-800 text-[15px] transition-transform duration-300 transform hover:scale-[1] hover:translate-x-1 overflow-hidden"
  >
    <td className="p-2">اشتراك شهري</td>
    <td className="p-2">01-05-2024</td>
    <td className="p-2">150 ج.م</td>
  </tr>
</tbody>

        </table>
      </div>
    </div>
  );
};

export default StudentFile;
