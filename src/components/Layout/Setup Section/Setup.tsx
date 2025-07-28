import './Setup.css';
import {useState} from 'react';



export default function SetupSection(){
    const [activeTab, setActiveTab] = useState('teachers');

    return (
        <section id='setup' className='setup-section'>
            <div className='setup-container'>
                <div className='setup-header'>
                    <h2 className='header'>تهيئة المنصة التعليمية</h2>
                    <p className='subheader'>أضف المدرسين، الكورسات، والمحاضرات في خطوات بسيطة</p>
                </div>
                <div className='tab-control '>
                    <button className='tab-button' onClick={() => setActiveTab('teachers')}>
                        <i className="fas fa-chalkboard-teacher" w-tid="489"></i>
                        <span>المدرسين</span>
                    </button>
                    <button className='tab-button' onClick={() => setActiveTab('courses')}>
                        <i className="fas fa-graduation-cap" w-tid="495"></i>
                        <span>الكورسات</span>
                    </button>
                    <button className='tab-button' onClick={() => setActiveTab('lectures')}>
                        <i className="fas fa-play-circle" w-tid="501"></i>
                        <span>المحاضرات</span>
                    </button>
                </div>
                <div className='tab-content'>
                    {activeTab === 'teachers' && (
                        <div className='teachers-tab'>
                            <form className='teachers-form flex justify-center items-center flex-col gap-1'>
                                <div className='form-row'>
                                    <div className='input-group'>
                                        <label>اسم المدرس</label>
                                        <input type="text" placeholder='أدخل اسم المدرس الكامل' />
                                    </div>
                                    <div className='input-group'>
                                        <label>التخصص الرئيسي </label>
                                        <select >
                                            <option value="" >اختر التخصص</option>
                                            <option >الفيزياء</option>
                                            <option >الرياضيات</option>
                                            <option >الكيمياء</option>
                                            <option >الأحياء</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div className='input-group'>
                                        <label>سنوات الخبرة </label>
                                        <input type="number" placeholder=' عدد سنوات الخبرة  ' />
                                    </div>
                                    <div className='input-group'>
                                        <label> معدل التقييم</label>
                                        <input type="number" placeholder='من 1 إلى 5' />
                                    </div>
                                </div>
                                <div className='input-group w-full'>
                                    <label>نبذة عن المدرس </label>
                                    <textarea rows={3} placeholder="اكتب نبذة قصيرة عن المدرس وخبراته"></textarea>
                                </div>
                                <div className='input-group w-full'>
                                    <label>صورة المدرس </label>
                                    <div className="upload-zone">
                                        <i className="fas fa-cloud-upload-alt" ></i>
                                        <p>اسحب صورة المدرس هنا أو انقر للاختيار</p>
                                    </div>
                                </div>
                                <button type="submit" className="submit-btn">
                                    <i className="fas fa-plus"></i>
                                    <span>إضافة المدرس</span>
                                </button>
                            </form>
                            <div className='teachers-list'>

                            </div>
                        </div>
                    )}
                    {activeTab === 'courses' && (
                        <div className='courses-tab'>
                            <h3>إضافة كورسات</h3>
                            {/* محتوى إضافة الكورسات */}
                        </div>
                    )}
                    {activeTab === 'lectures' && (
                        <div className='lectures-tab'>
                            <h3>إضافة محاضرات</h3>
                            {/* محتوى إضافة المحاضرات */}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}