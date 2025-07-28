import './Hero.css';
import floatingCard from '../../floating-card/floating-card';
import StatCard from '../../stat-card/stat-card.tsx';


const FloatingCardTitles = ['الفيزياء', 'الرياضيات', 'الكيمياء', 'الأحياء'];

const statCardsData = [
  { value: 0, content: 'كورس متاح' },
  { value: 0, content: 'طالب نشط' },
  { value: 0, content: 'مدرس مميز' }
];

function renderFloatingCards() {
  return FloatingCardTitles.map((title, idx) =>
    floatingCard(title, {
      style: { animationDelay: `${idx * 1.5}s` },
      id: `card-${idx}`
    })
  );
}

function renderStatCards() {
  return statCardsData.map((stat, idx) => (
        <StatCard value={stat.value} content={stat.content} key={idx} />
  ));
}

export default function Hero() {
    return (
        <div className="hero-section flex flex-col items-center justify-center h-screen bg-hero-bg">
            <h1 className=" hero-header text-4xl font-bold text-white mb-4">أكاديميتك الرقمية الكاملة</h1>
            <p className=" hero-subheader text-lg text-white mb-8">أنشئ، صنف، ونظم كورساتك التعليمية باحتراف مع أدوات قوية لإدارة المحتوى، المدرسين، والطلاب</p>
            <div className='hero-stats'>
                {renderStatCards()}
            </div>
            <div className='floating-cards'>
                {renderFloatingCards()}
            </div>
        </div>
    );
}