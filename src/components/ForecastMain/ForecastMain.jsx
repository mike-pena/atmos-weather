import Lottie from "lottie-react/build/index.es.js";
//import sunAnimation from "../../assets/animations/drizzle-day.json"; FOR TESTING

import "./ForecastMain.css";

function ForecastMain({ data }) {
  return (
    <section className="forecast-main">
        <p className="forecast-main__local-time">Local Time: {data.formattedTime}</p>
        <h2 className="forecast-main__location">{data.city}, {data.country}</h2>
        
        <div className="forecast-main__content">
            <Lottie
              className="forecast-main__animation"
              animationData={data.animation}
              loop={true}
            />
            <div className="forecast-main__temperature">
              <div className="forecast-main__temperature-value">
                  <p className="forecast-main__temperature-number">{Math.round(data.temperature)}</p>
                  <p className="forecast-main__temperature-unit">{data.units.temperature}</p>
              </div>
              <p className="forecast-main__feels-like">Feels like: {Math.round(data.feelsLike.value)}°</p>
            </div>
        </div>

        
    </section>
  );
}

export default ForecastMain;