import './floating-card.css';
export default function floatingCard(title: string, props?: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="floating-card" {...props}>
      {title}
    </div>
  );
}