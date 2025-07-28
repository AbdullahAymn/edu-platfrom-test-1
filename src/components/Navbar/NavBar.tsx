import './NavBar.css'

export default function NavBar() {
  return (
    <nav className="navbar flex flex-row items-center justify-between">
      <div className="nav-brand">
        <h1>معلم</h1>
        <span className="nav-brand">المنصة الذكية للتعليم</span>
        
      </div>
      <div className="nav-links flex items-center gap-8">
        <a href='#features'>المميزات</a>
        <a href='#teachers'>المدرسين</a>
        <a href='#courses'>الكورسات</a>
        <a href='#dashboard'>اللوحة الإحصائية</a>
        <button className='cta-button'>ابدأ الآن</button>
      </div>
    </nav>
      
  )
}
