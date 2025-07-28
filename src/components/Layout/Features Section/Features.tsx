import './Features.css';

export default function FeaturesSection() {
    return(
        <div className="features-section" id='features'>
            <h2 className='section-title'>مميزات تغير طريقة تعليمك</h2>
            <div className="features-list flex flex-wrap justify-center gap-8">
                <div className='feature-card'>
                    <div className='feature-icon'><i className="bi bi-stack"></i></div>
                    <h3>نظام تصنيف متقدم </h3>
                    <p>صنف موادك وتخصصاتك مع إمكانية إضافة تصنيفات فرعية لخطط الدفع المختلفة</p>
                </div>
                <div className='feature-card'>
                    <div className='feature-icon'><i className="bi bi-people-fill"></i></div>
                    <h3>إدارة متعددة المدرسين</h3>
                    <p>نفس الماده يمكن تقديمها من خلال عدة مدرسين مع نظام تقييم شامل</p>
                </div>
                <div className='feature-card'>
                    <div className='feature-icon'><i className="bi bi-credit-card-2-front"></i></div>
                    <h3>دفع مرن</h3>
                    <p>خطط دفع متنوعة (سنوية، فصلية، شهرية) مع أو كوبونات خصم ووسائل دفع الكترونية</p>
                </div>
            </div>
        </div>
    )
}