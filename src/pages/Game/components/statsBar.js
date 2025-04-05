import "./statsBar.css";

const statIcons = {
  military: '⚔️',
  politics: '🏛️',
  environment: '🌱',
  qualityOfLife: '🏠',
  economy: '💰'
};

export default function StatsBar({ stats }) {
  const statColors = {
    military: "#ff6b6b",
    politics: "#70a1ff",
    environment: "#51cf66",
    qualityOfLife: "#fcc419",
    economy: "#9c88ff",
  };
  return (
    <div className="stats-bar">
      {Object.entries(stats).map(([stat, value]) => (
        <div key={stat} className="stat-item">
          <div className="stat-header">
            <span className="stat-icon">{statIcons[stat]}</span>
            <span className="stat-label">{stat.toUpperCase()}</span>
          </div>
          <div className="stat-bar-container">
            <div 
              className="stat-bar" 
              style={{ width: `${value}%` ,
              backgroundColor: statColors[stat]}}
            />
          </div>
          <span className="stat-value">{value}/100</span>
        </div>
      ))}
    </div>
  );
}
