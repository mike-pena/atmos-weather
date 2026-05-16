import "./SunTimes.css";

function SunTimes({ data }) {
  return (
    <section className="sun-times">
      <div>Sunrise: {data.sunrise}</div>
      <div>Sunset: {data.sunset}</div>
    </section>
  );
}

export default SunTimes;