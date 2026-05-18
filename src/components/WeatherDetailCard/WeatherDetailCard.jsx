import "./WeatherDetailCard.css";

function WeatherDetailCard({
  label,
  value,
  description,
  icon,
}) {
  return (
    <section className="weather-detail-card">
      <div className="weather-detail-header">
        {icon && <span>{icon}</span>}

        <p className="weather-detail-label">
          {label}
        </p>
      </div>

      <h3 className="weather-detail-value">
        {value}
      </h3>

      {description && (
        <p className="weather-detail-description">
          {description}
        </p>
      )}
    </section>
  );
}

export default WeatherDetailCard;