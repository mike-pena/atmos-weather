import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__content">
        <div className="preloader__glow"></div>

        <img src="src\assets\images\logo.png" alt="" className="preloader__logo"/>

        <p className="preloader__text">
          Loading atmosphere...
        </p>
      </div>
    </div>
  );
}

export default Preloader;