import { useRef } from "react";
import "./HourlyForecast.css";

function HourlyForecast({ forecast, isDay, temperatureUnit }) {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const amount = 300;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const themeModifier = isDay
    ? "hourly-forecast_theme_day"
    : "hourly-forecast_theme_night";

  return (
    <section className={`hourly-forecast ${themeModifier}`}>
      <button
        className="hourly-forecast__button hourly-forecast__button_position_left"
        onClick={() => scroll("left")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <div ref={carouselRef} className="hourly-forecast__carousel">
        {forecast.map((hour) => (
          <div key={hour.fullTime} className="hourly-forecast__card">
            <p className="hourly-forecast__time">{hour.time}</p>
            <p className="hourly-forecast__temperature">{Math.round(hour.temperature)} {temperatureUnit}</p>
            <img src={hour.icon} className="hourly-forecast__condition-icon" alt={hour.condition} />
            <p className="hourly-forecast__condition">{hour.condition}</p>
            <div className="hourly-forecast__precipitation">
              <div className="hourly-forecast__precipitation-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" className="rain-icon">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.857 13L12 19m-2.5-7l-.857 6m7.857-6l-.857 6M8 7.036a3.484 3.484 0 011.975.99M6 13.662A3.5 3.5 0 018.37 7.11a5.002 5.002 0 019.614 1.49 2.751 2.751 0 011.59 4.122"/>
                </svg>
              </div>
              <p className="hourly-forecast__precipitation-value">{hour.precipitationProbability}%</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="hourly-forecast__button hourly-forecast__button_position_right"
        onClick={() => scroll("right")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </section>
  );
}

export default HourlyForecast;
