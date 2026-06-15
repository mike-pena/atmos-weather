import "./DailyForecast.css";

function DailyForecast({ forecast, isDay, temperatureUnit }) {

  const themeModifier = isDay
    ? "daily-forecast_theme_day"
    : "daily-forecast_theme_night";
  
  return (
    <section className={`daily-forecast ${themeModifier}`}>
      {forecast.map((day) => (
        <div key={day.date} className="daily-forecast__card">
          <p className="daily-forecast__day">{day.day}</p>
          <div className="daily-forecast__temperature-wrapper">
            <p className="daily-forecast__temperature"><span className={`daily-forecast__temperature-symbol daily-forecast__temperature-symbol_type_min ${themeModifier}`}>↓</span> {Math.round(day.minTemp)}°</p>
            <p className="daily-forecast__temperature"><span className={`daily-forecast__temperature-symbol daily-forecast__temperature-symbol_type_max ${themeModifier}`}>↑</span> {Math.round(day.maxTemp)}°</p>
          </div>
          <div className="daily-forecast__precipitation">
            <div className="daily-forecast__precipitation-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" className="daily-forecast__rain-icon">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.857 13L12 19m-2.5-7l-.857 6m7.857-6l-.857 6M8 7.036a3.484 3.484 0 011.975.99M6 13.662A3.5 3.5 0 018.37 7.11a5.002 5.002 0 019.614 1.49 2.751 2.751 0 011.59 4.122"/>
              </svg>
            </div>
            <p className="daily-forecast__precipitation-number">{day.precipitationProbability}%</p>
          </div>
          <div>
            <img src={day.icon} className={`daily-forecast__condition-icon ${themeModifier}`} alt={day.condition} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default DailyForecast;