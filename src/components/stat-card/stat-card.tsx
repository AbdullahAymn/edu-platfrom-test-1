import './stat-card.css'

export default function StatCard({value, content}: {value: number, content: string}) {
    return (
        <div className='stat-card'>
            <div className='stat-value'>{value}</div>
            <div className='stat-name'>{content}</div>
        </div>
    )
}
