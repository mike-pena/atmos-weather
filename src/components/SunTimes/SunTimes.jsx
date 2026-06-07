import Lottie from "lottie-react/build/index.es.js";
import moonAnimation from "../../assets/animations/moon.json";
import sunAnimation from "../../assets/animations/sun_2.json";
import "./SunTimes.css";

function SunTimes({ data, isDay }) {

  const theme = isDay ? "day" : "night";

  return (
    <section className={`sun-times-container ${theme}`}>
      <div className="sun-times-label">
        Sunrise:
        <br />
        <span>
          {data.sunrise}
        </span>
      </div>

      {isDay && (
        <div className="sun-track">
          <div
            className="sun-icon"
            style={{
              left: `${data.progressPercent}%`,
            }}
          >
            <Lottie
              className="sun-animation"
              animationData={sunAnimation}
              loop={true}
            />
          </div>
        </div>
      )}

      <div className="sun-times-label">
        Sunset:
        <br />
        <span>
          {data.sunset}
        </span>
      </div>

      {!isDay && (
        <div
            className="moon-icon"
        >
          <Lottie
            className="moon-animation"
            animationData={moonAnimation}
            loop={true}
          />
        </div>
      )}

    </section>
  );
}

export default SunTimes;