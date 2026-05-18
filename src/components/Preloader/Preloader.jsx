import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="preloader-glow"></div>

        <h1 className="preloader-title">
          Cinematic Weather
        </h1>

        <p className="preloader-text">
          Loading atmosphere...
        </p>
      </div>
    </div>
  );
}

export default Preloader;