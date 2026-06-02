import "./ForecastMain.css";

function ForecastMain({ data }) {
  return (
    <section className="forecast-main">
        <p>Local Time: {data.formattedTime}</p>
        <h2>{data.city}, {data.country}</h2>
        
        <div className="forecast-main-wrapper">
            <img src={data.icon} className="condition-icon" alt={data.condition} />
            <div>
              <div className="temperature-value-container">
                  <p className="temperature-number">{Math.round(data.temperature)}</p>
                  <p className="temperature-unit">°C</p>
              </div>
              <p className="apparent-temp">Feels like: {Math.round(data.feelsLike.value)} °C</p>
            </div>
        </div>

        
    </section>
  );
}

export default ForecastMain;