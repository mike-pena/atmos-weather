import Lottie from "lottie-react/build/index.es.js";
//import sunAnimation from "../../assets/animations/drizzle-day.json"; FOR TESTING

import "./ForecastMain.css";

function ForecastMain({ data }) {
  return (
    <section className="forecast-main">
        <p>Local Time: {data.formattedTime}</p>
        <h2>{data.city}, {data.country}</h2>
        
        <div className="forecast-main-wrapper">
            <Lottie
              className="condition-animation"
              animationData={data.animation}
              loop={true}
            />
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