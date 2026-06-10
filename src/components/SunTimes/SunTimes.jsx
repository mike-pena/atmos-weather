import Lottie from "lottie-react/build/index.es.js";
import moonAnimation from "../../assets/animations/moon.json";
import sunAnimation from "../../assets/animations/sun_2.json";

import "./SunTimes.css";

function SunTimes({ data, isDay }) {
  const themeModifier = isDay
    ? "sun-times_theme_day"
    : "sun-times_theme_night";

  return (
    <section className={`sun-times ${themeModifier}`}>
      <div className="sun-times__label">
        Sunrise:
        <br />
        <span className="sun-times__value">
          {data.sunrise}
        </span>
      </div>

      {isDay && (
        <div className="sun-times__track">
          <div
            className="sun-times__sun-icon"
            style={{
              left: `${data.progressPercent}%`,
            }}
          >
            <Lottie
              className="sun-times__sun-animation"
              animationData={sunAnimation}
              loop={true}
            />
          </div>
        </div>
      )}

      <div className="sun-times__label">
        Sunset:
        <br />
        <span className="sun-times__value">
          {data.sunset}
        </span>
      </div>

      {!isDay && (
        <div className="sun-times__moon-icon">
          <Lottie
            className="sun-times__moon-animation"
            animationData={moonAnimation}
            loop={true}
          />
        </div>
      )}
    </section>
  );
}

export default SunTimes;