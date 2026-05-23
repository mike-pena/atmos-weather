import "./DailyForecast.css";

function DailyForecast({ forecast, isDay }) {

  const theme = isDay ? "day" : "night";
  
  return (
    <section className={`daily-forecast-container ${theme}`}>
      {forecast.map((day) => (
        <div key={day.date} className="daily-forecast-card">
          <p>{day.day}</p>
          <p>{day.minTemp}°C</p>
          <p>{day.maxTemp}°C</p>
          <p>{day.condition}</p>
        </div>
      ))}
    </section>
  );
}

export default DailyForecast;