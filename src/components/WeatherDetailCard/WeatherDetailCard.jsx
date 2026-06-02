import "./WeatherDetailCard.css";

function WeatherDetailCard({
  label,
  value,
  description,
  icon,
  isDay,
  extraContent
}) {

  const theme = isDay ? "day" : "night";

  return (
    <section className={`weather-detail-card ${theme}`}>
      <div className="weather-detail-header">
        {icon && <span>{icon}</span>}

        <p className="weather-detail-label">
          {label}
        </p>
      </div>

      <div className="weather-detail-content">
        <p className="weather-detail-value">
          {value}
        </p>

        <div className="weather-detail-column">
          {description && (
            <p className="weather-detail-description">
              {description}
            </p>
          )}

          {extraContent && (extraContent)}
        </div>
      </div>

    </section>
  );
}

export default WeatherDetailCard;