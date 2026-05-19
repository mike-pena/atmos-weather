import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="preloader-glow"></div>

        {/*<h1 className="preloader-title">
          ATMOS
        </h1>*/}

        <img src="src\assets\images\logo.png" alt="" className="preloader-logo"/>

        <p className="preloader-text">
          Loading atmosphere...
        </p>
      </div>
    </div>
  );
}

export default Preloader;