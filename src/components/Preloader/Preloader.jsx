import logo from "../../assets/images/logo.png";

import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__content">
        <div className="preloader__glow"></div>

        <img src={logo} alt="" className="preloader__logo"/>

        <p className="preloader__text">
          Loading atmosphere...
        </p>
      </div>
    </div>
  );
}

export default Preloader;