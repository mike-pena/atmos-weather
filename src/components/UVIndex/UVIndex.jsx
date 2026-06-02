import "./UVIndex.css";

const levels = ["Low", "Moderate", "High", "Very High", "Extreme"];

function UVIndex({ 
  label, 
  value, 
  description, 
  icon, 
  isDay,
  currentLevel
}) {

  const theme = isDay ? "day" : "night";

  return (
    <section className={`uv-index-card ${theme}`}>
      <div className="uv-index-header">
        {icon && <span>{icon}</span>}

        <p className="uv-index-label">{label}</p>
      </div>

      <p className="uv-index-value">{value}</p>

      <div className="uv-levels">
            <div className="uv-level-labels">
                {levels.map((level) => (
                    <div
                    key={level}
                    className={`uv-label ${
                        currentLevel === level ? "selected" : ""
                    }`}
                    >
                    {level}
                    </div>
                ))}
            </div>
            <div className="uv-level-colors">
                <div style={{backgroundColor: "green"}}></div>
                <div style={{backgroundColor: "yellow"}}></div>
                <div style={{backgroundColor: "orange"}}></div>
                <div style={{backgroundColor: "red"}}></div>
                <div style={{backgroundColor: "purple"}}></div>
            </div>
        </div>
        
      {description && <p className="uv-index-description">{description}</p>}
    </section>
  );
}

export default UVIndex;
