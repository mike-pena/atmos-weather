import "./WeatherDetailCard.css";

function WeatherDetailCard({
  label,
  value,
  description,
  icon,
  isDay,
  extraContent,
}) {
  const themeModifier = isDay
    ? "weather-detail-card_theme_day"
    : "weather-detail-card_theme_night";

  return (
    <section className={`weather-detail-card ${themeModifier}`}>
      <div className="weather-detail-card__header">
        {icon && <span>{icon}</span>}

        <p className="weather-detail-card__label">
          {label}
        </p>
      </div>

      <div className="weather-detail-card__content">
        <p className="weather-detail-card__value">
          {value}
        </p>

        <div className="weather-detail-card__column">
          {description && (
            <p className="weather-detail-card__description">
              {description}
            </p>
          )}

          {extraContent && extraContent}
        </div>
      </div>
    </section>
  );
}

export default WeatherDetailCard;