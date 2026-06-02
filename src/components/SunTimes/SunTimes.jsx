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
            <img src="src\assets\icons\clear-day.svg" alt="" />
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
            style={{
              left: `${data.progressPercent}%`,
            }}
        >
          <img src="src\assets\icons\clear-night.svg" alt="" />
        </div>
      )}

    </section>
  );
}

export default SunTimes;