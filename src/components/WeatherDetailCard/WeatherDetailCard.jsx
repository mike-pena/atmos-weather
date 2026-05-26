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

      <p className="weather-detail-value">
        {value}
      </p>

      {extraContent && (extraContent)}
      
      {description && (
        <p className="weather-detail-description">
          {description}
        </p>
      )}
    </section>
  );
}

export default WeatherDetailCard;