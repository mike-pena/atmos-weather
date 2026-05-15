import "./HourlyForecast.css";

function HourlyForecast({ hour }) {
  return (
    <div key={hour.time}>
      <p>{hour.time}</p>
      <p>{hour.temperature}°C</p>
      <p>{hour.condition}</p>
      <p>{hour.precipitationProbability}%</p>
    </div>
  );
}

export default HourlyForecast;
