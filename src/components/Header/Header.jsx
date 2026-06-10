import { Link, NavLink } from "react-router-dom";

import "./Header.css";

function Header({ variant = "home", isDay, unit, onUnitChange }) {

    const theme = isDay ? "day" : "night";

  return (
    <header className={`header header-${variant} ${theme}`}>
        <div className="header__container">
            <Link to="/" className="logo" viewTransition>
                <img src="src\assets\images\logo.png" alt="" />
            </Link>
            <nav>
                <ul className="navigation-list">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                        viewTransition
                        >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about-us"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                        viewTransition
                        >
                        About Us
                    </NavLink>
                </ul>
            </nav>
            <div className="controls">
                {/*<button type="button" onClick={onUnitChange} className="unitBtn">
                    {unit === "celsius" ? "°F" : "°C"}
                </button>*/}

                <button
                    className="unit-toggle"
                    type="button"
                    onClick={onUnitChange}
                    aria-label="Toggle temperature unit"
                >
                    <span className={`unit-toggle__option ${unit === "celsius" ? "active" : ""}`}>
                        °C
                    </span>

                    <span className={`unit-toggle__option ${unit === "fahrenheit" ? "active" : ""}`}>
                        °F
                    </span>

                    <span
                        className={`unit-toggle__indicator ${
                        unit === "fahrenheit" ? "unit-toggle__indicator--right" : ""
                        }`}
                    />
                </button>
            </div>
        </div>
    </header>
  );
}

export default Header;