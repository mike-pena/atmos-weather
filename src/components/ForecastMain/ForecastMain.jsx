import "./ForecastMain.css";

function ForecastMain({ data }) {
  return (
    <section className="forecast-main">
        <p>Local Time: {data.currentTime}</p>
        <h2>{data.city}, {data.country}</h2>
        
        <div className="forecast-main-wrapper">
            <img src={data.icon} className="condition-icon" alt={data.condition} />
            <div className="temperature-container">
                <p className="temperature-number">{data.temperature}</p>
                <p className="temperature-unit">°C</p>
            </div>
        </div>
    </section>
  );
}

export default ForecastMain;