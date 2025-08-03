import React, { useEffect } from 'react';
import { useState } from 'react';
import './check.css';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Check: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedPlanId, setSelectedPlanId] = useState('');

  const options = [
    { id: 'credit-card', label: 'بطاقة ائتمان', icon: 'credit-card' },
    { id: 'mobile-alt', label: 'فودافون كاش', icon: 'mobile-alt' },
    { id: 'qrcode', label: 'إنستاباي', icon: 'qrcode' },
  ];

  
  useEffect(() => {
    window.scrollTo({ top: 5, behavior: 'smooth' });
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
            <div dir="auto" className="text-center pt-7   ">
          <i className="fas fa-credit-card fa-2xl main-text"></i>
          <span className="text-3xl font-medium main-text ">صفحة الدفع</span>
          <p className="py-3 main-text">
            اختر الباقة المناسبة لك وأكمل عملية الدفع
          </p>
        </div>
<div className='lg:flex  w-[100%]  lg:my-5 '>

    <div className='lg:w-[80%] '>
      

         <div className="relative outline-1 outline-gray-700 pt-10  bg-black w-[90%] mx-auto mb-10 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-300 custom-translate-up transition-all pb-10">
          <div className="card-top-line"></div>
          <div className="text-right pr-6 pb-[20px]   ">
            <span className="text-2xl text-white pb-[5px]">اختر باقة الاشتراك</span>
            <i className="fas fa-tag text-white fa-2xl"></i>
          </div>

          <div className="row px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  shadow-2xl   ">
     <div
  onClick={() => setSelectedPlanId('monthly')}
  className={`inner overflow-hidden outline-1 outline-gray-700 relative text-center py-10 rounded-xl custom-translate-up group hover:translate-y-[-5px] transition-all main-color hover:shadow-lg hover:shadow-indigo-500 cursor-pointer ${
    selectedPlanId === 'monthly' ? 'ring-2 ring-indigo-500' : ''
  }`}
>
  
  <div className="card-top-line"></div>
  
          <div className="absolute top-[-55px] right-[-55px] w-30 h-30 lovely-color rounded-full transform scale-100 group-hover:scale-125 transition-transform duration-300 z-10"></div> 
                       <div className="absolute bottom-[-55px] left-[-55px] w-30 h-30 lovely-color rounded-full transform scale-100 group-hover:scale-125 transition-transform duration-300 z-10"></div> 
  <label>
    <input
      type="radio"
      name="payment"
      value="monthly"
      checked={selectedPlanId === 'monthly'}
      onChange={() => setSelectedPlanId('monthly')}
      className="absolute top-3 left-1"
    />
  </label>

  <div className="w-[50px] h-[50px] mx-auto rounded-full flex items-center justify-center year">
    <i className="fas fa-calendar-day fa-2xl main-text"></i>
  </div>
  <h5 className="text-lg font-semibold my-4 main-text">اشتراك شهري</h5>
  <div dir="auto" className="py-5">
    <span className="text-indigo-600 text-3xl font-bold">150</span>
    <span className="text-3xl text-indigo-600 font-bold">ج.م</span>
  </div>
  <p className="text-gray-400 text-lg">شهر واحد</p>
</div>
<div
  onClick={() => setSelectedPlanId('semester')}
  className={`inner relative overflow-hidden outline-1 outline-gray-700 text-center py-10 rounded-xl custom-translate-up transition-all main-color group hover:translate-y-[-5px] shadow-lg hover:shadow-indigo-500 cursor-pointer ${
    selectedPlanId === 'semester' ? 'ring-2 ring-indigo-500' : ''
  }`}
>
            <div className="absolute top-[-55px] right-[-55px] w-30 h-30 lovely-color rounded-full transform scale-100 group-hover:scale-125 transition-transform duration-300 z-10"></div> 
                       <div className="absolute bottom-[-55px] left-[-55px] w-30 h-30 lovely-color rounded-full transform scale-100 group-hover:scale-125 transition-transform duration-300 z-10"></div> 
  <div className="card-top-line"></div>
            <div className="absolute top-[-55px] right-[-55px] w-30 h-30 lovely-color rounded-full transform scale-100 group-hover:scale-125 transition-transform duration-300 z-10"></div> 
                       <div className="absolute bottom-[-55px] left-[-55px] w-30 h-30 lovely-color rounded-full transform scale-100 group-hover:scale-125 transition-transform duration-300 z-10"></div> 
  <label>
    <input
      type="radio"
      name="payment"
      value="semester"
      checked={selectedPlanId === 'semester'}
      onChange={() => setSelectedPlanId('semester')}
      className="absolute top-3 left-1"
    />
  </label>

  <div className="w-[50px] h-[50px] mx-auto rounded-full flex items-center justify-center year">
    <i className="fas fa-calendar-alt fa-2xl main-text"></i>
  </div>
  <h5 className="text-lg font-semibold my-4 main-text">اشتراك فصلى</h5>
  <div dir="auto" className="py-5">
    <span className="text-indigo-600 text-3xl font-bold">500</span>
    <span className="text-3xl text-indigo-600 font-bold">ج.م</span>
  </div>
  <p className="text-gray-400 text-lg">فصل دراسي كامل</p>
</div>
<div
  onClick={() => setSelectedPlanId('yearly')}
  className={`inner bg-black relative overflow-hidden hover:  text-center pt-10 rounded-xl outline-1 outline-gray-700 hover:translate-y-[-5px] transition hover:shadow-xl hover:shadow-indigo-300 cursor-pointer ${
    selectedPlanId === 'yearly' ? 'ring-2 ring-indigo-500' : ''
  }`}
>
  <div className="absolute top-[16px] right-[-38px] year text-white rotate-45 py-1 font-bold px-8">
    الأكثر شعبية
  </div>
  <label>
    <input
      type="radio"
      name="payment"
      value="yearly"
      checked={selectedPlanId === 'yearly'}
      onChange={() => setSelectedPlanId('yearly')}
       className="absolute top-3 left-1"
    />
    <div className="card-top-line"></div>
  </label>

  <div className="w-[50px] h-[50px] mx-auto rounded-full flex items-center justify-center year">
    <i className="fas fa-calendar fa-2xl text-white"></i>
  </div>
  <h4 dir="auto" className="text-lg font-bold my-4 text-white">اشتراك سنوى</h4>
  <div className="pt-5">
    <span dir="auto" className="text-white text-3xl font-bold">ج.م</span>
    <span className="text-white  text-3xl font-bold">900</span>
  </div>
  <p className="text-gray-400 text-lg py-5">عام كامل</p>
</div>
<div
  onClick={() => setSelectedPlanId('single')}
  className={`inner group hover:translate-y-[-5px] relative overflow-hidden outline-1 outline-gray-700 text-center py-10 rounded-xl custom-translate-up transition-all main-color hover:shadow-lg hover:shadow-indigo-500 cursor-pointer ${
    selectedPlanId === 'single' ? 'ring-2 ring-indigo-500' : ''
  }`}
>
  <div className="card-top-line"></div>
            <div className="absolute top-[-55px] right-[-55px] w-30 h-30 lovely-color rounded-full transform scale-100 group-hover:scale-125 transition-transform duration-300 z-10"></div> 
                       <div className="absolute bottom-[-55px] left-[-55px] w-30 h-30 lovely-color rounded-full transform scale-100 group-hover:scale-125 transition-transform duration-300 z-10"></div> 
  <label>
    <input
      type="radio"
      name="payment"
      value="single"
      checked={selectedPlanId === 'single'}
      onChange={() => setSelectedPlanId('single')}
    className="absolute top-3 left-1"
    />
  </label>

  <div className="w-[50px] h-[50px] mx-auto rounded-full flex items-center justify-center year">
    <i className="fas fa-play fa-xl text-white"></i>
  </div>
  <h4 dir="auto" className="text-lg font-bold my-4 text-white">محاضرة منفصلة</h4>
  <div dir="auto" className="py-5">
    <span className="text-indigo-600 text-3xl font-bold">25</span>
    <span className="text-3xl text-indigo-600 font-bold">ج.م</span>
  </div>
  <p className="text-gray-300 text-lg">محاضرة واحدة</p>
</div>
            
          </div>
        </div>

        <div className="bg-black relative shadow-indigo-300 outline-1 outline-gray-700 w-[90%]  rounded-xl overflow-hidden mx-auto hover:shadow-lg custom-translate-up transition-all">
           <div className='card-top-line'></div>
          <div dir="auto" className=" text-right py-5 pr-5">
            <i className="fas fa-percentage text-white text-xl"></i>
            <span className="main-text text-xl">كود الخصم</span>
          </div>
          <input dir="rtl" type="text" className="pr-5 w-[90%] mt-5 mx-auto  outline-2 outline-gray-600 mb-5 block py-4 main-color rounded-lg placeholder:text-gray-400" placeholder="ادخل كود الخصم او كود السنتر" />
          <button className="w-[90%] mb-5 mx-auto mt-1 py-3 rounded-lg text-indigo-600  outline-2 font-bold outline-indigo-600 hover:bg-indigo-600 hover:text-white transition block">
            <span>تطبيق الكود</span>
            <i className="fas fa-check ml-2"></i>
          </button>
        </div>



        <div className="relative outline-1 outline-gray-700  bg-black w-[90%] mx-auto mt-10 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-300 custom-translate-up transition-all">
          <div className="card-top-line"></div>
          <div dir="auto" className="text-right pb-5 pr-5">
            <span className="text-white text-xl">وسيلة الدفع</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5  px-4 pb-6 bg-black">
            {options.map((option) => (
              <div
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className="relative  cursor-pointer"
              >
                
                <div className="absolute top-7 left-1 z-888">
                  <div className="w-3 h-3 border-2 border-white  rounded-full flex items-center justify-center">
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        selectedOption === option.id ? 'bg-white ' : ''
                      }`}
                    ></div>
                  </div>
                </div>

              
                <div className="relative overflow-hidden text-center py-9 rounded-xl main-color shadow-lg transition-all hover:shadow-indigo-500">
                  <div className="card-top-line"></div>
                  <i className={`fas fa-${option.icon} fa-2xl main-text`}></i>
                  <h4 className="text-xl main-text font-semibold mt-8">{option.label}</h4>
                </div>
              </div>
            ))}
          </div>


        </div>

  </div>


        <div className="relative overflow-hidden lg:w-[30%] my-10 md:mb-0  lg:ml-10 mx-auto lg:mt-[5px] bg-black text-white  w-[90%]   rounded-xl  mx-auto hover:shadow-xl  transition-all outline  outline-gray-200    ">
          <div className='card-top-line'></div>
          <div dir="auto" className=" text-right py-5 pr-5">
            <i className="fas fa-receipt text-2xl "></i>
            <span className=" text-2xl font-bold">ملخص الطلب</span>
          </div>
          <div className="w-[90%] mx-auto">
            <div dir="auto" className="flex justify-between items-center py-2">
              <span className="text-lg">الباقة المختارة:</span>
              <span className="text-lg">اشتراك سنوي</span>
            </div>
            <div dir="auto" className="flex justify-between items-center py-2">
              <span className="text-lg">السعر الأساسي:</span>
              <span className="text-lg">900 ج.م</span>
            </div>
            <div dir="auto" className="flex justify-between items-center py-2">
              <span className="text-lg text-green-800">خصم العرض الخاص:</span>
              <span className="text-lg text-green-800">-270 ج.م</span>
            </div>
            <div dir="auto" className="flex justify-between items-center py-2">
              <span className="text-lg">كود الخصم:</span>
              <span className="text-lg">-0 ج.م</span>
            </div>
            <hr />
            <div dir="auto" className="flex justify-between items-center py-2">
              <span className="text-lg font-bold">المجموع:</span>
              <span className="text-xl font-bold text-green-800">630 ج.م</span>
            </div>
            <div dir="auto" className="bg-green-200 rounded outline-green-900 my-5 outline-2 py-5">
              <i className="fas fa-gift text-green-950 font-bold text-xl px-5"></i>
              <span className="text-green-950 font-bold text-xl">وفرت 270 ج.م!</span>
            </div>
            <button dir="auto" className="cursor-pointer year transition-all custom-translate-up rounded-xl py-3 w-full mb-5 mx-auto block">
              <i className="fas fa-lock text-white text-xl font-bold"></i>
              <span className="font-bold text-xl text-white">تأكيد الدفع</span>
            </button>
            <p dir="auto" className="mb-5 text-gray-100 text-center">
              <i className="fas fa-shield-alt text-gray-300"></i>
              دفع آمن ومشفر
            </p>
          </div>
        </div>
</div>
      </motion.div>
    </>
  );
};

export default Check;