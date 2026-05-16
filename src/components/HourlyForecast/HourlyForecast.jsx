import "./HourlyForecast.css";

function HourlyForecast({ forecast }) {
  return (
    <section className="hourly-forecast">
      {forecast.map((hour) => (
        <div key={hour.fullTime} className="hourly-forecast-card">
          <p>{hour.time}</p>
          <p>{hour.temperature}°C</p>
          <p>{hour.condition}</p>
          <p>{hour.precipitationProbability}%</p>
        </div>
      ))}
    </section>
  );
}

export default HourlyForecast;
