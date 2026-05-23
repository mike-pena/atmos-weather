import { useRef } from "react";
import "./HourlyForecast.css";

function HourlyForecast({ forecast, isDay }) {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const amount = 300;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const theme = isDay ? "day" : "night";

  return (
    <section className={`hourly-forecast-wrapper ${theme}`}>
      <button
        className="carousel-btn left"
        onClick={() => scroll("left")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <div ref={carouselRef} className="hourly-forecast">
        {forecast.map((hour) => (
          <div key={hour.fullTime} className="hourly-forecast-card">
            <p className="hour-time">{hour.time}</p>
            <p className="hour-temperature">{hour.temperature} °C</p>
            <img src={hour.icon} className="hourly-condition-icon" alt={hour.condition} />
            <p className="hour-condition">{hour.condition}</p>
            <div className="precipitation-wrapper">
              <div className="precipitation-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" className="rain-icon">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.857 13L12 19m-2.5-7l-.857 6m7.857-6l-.857 6M8 7.036a3.484 3.484 0 011.975.99M6 13.662A3.5 3.5 0 018.37 7.11a5.002 5.002 0 019.614 1.49 2.751 2.751 0 011.59 4.122"/>
                </svg>
              </div>
              <p className="precipitation-number">{hour.precipitationProbability}%</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-btn right"
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
