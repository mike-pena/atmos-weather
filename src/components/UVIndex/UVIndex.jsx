import "./UVIndex.css";

const levels = ["Low", "Moderate", "High", "Very High", "Extreme"];

function UVIndex({
  label,
  value,
  description,
  icon,
  isDay,
  currentLevel,
}) {
  const themeModifier = isDay
    ? "uv-index_theme_day"
    : "uv-index_theme_night";

  return (
    <section className={`uv-index ${themeModifier}`}>
      <div className="uv-index__header">
        {icon && <span>{icon}</span>}

        <p className="uv-index__label">{label}</p>
      </div>

      <p className="uv-index__value">{value}</p>

      <div className="uv-index__levels">
        <div className="uv-index__level-labels">
          {levels.map((level) => (
            <div
              key={level}
              className={`uv-index__level ${
                currentLevel === level
                  ? "uv-index__level_selected"
                  : ""
              }`}
            >
              {level}
            </div>
          ))}
        </div>

        <div className="uv-index__level-colors">
          <div style={{ backgroundColor: "green" }}></div>
          <div style={{ backgroundColor: "yellow" }}></div>
          <div style={{ backgroundColor: "orange" }}></div>
          <div style={{ backgroundColor: "red" }}></div>
          <div style={{ backgroundColor: "purple" }}></div>
        </div>
      </div>

      {description && (
        <p className="uv-index__description">
          {description}
        </p>
      )}
    </section>
  );
}

export default UVIndex;