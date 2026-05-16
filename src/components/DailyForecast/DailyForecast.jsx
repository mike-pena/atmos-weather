import "./DailyForecast.css";

function DailyForecast({ forecast }) {
  return (
    <section className="daily-forecast">
      {forecast.map((day) => (
        <div key={day.date} className="daily-forecast-card">
          <p>{day.day}</p>
          <p>{day.maxTemp}°C</p>
          <p>{day.minTemp}°C</p>
          <p>{day.condition}</p>
        </div>
      ))}
    </section>
  );
}

export default DailyForecast;