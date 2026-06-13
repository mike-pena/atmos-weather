import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import "./Header.css";

function Header({ variant = "home", isDay, unit, onUnitChange }) {
  
  const themeModifier = isDay ? "header_theme_day" : "header_theme_night";

  const variantModifier = `header_variant_${variant}`;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${variantModifier} ${themeModifier}`}>
      <div className="header__container">
        <Link to="/" className="header__logo" viewTransition>
          <img src={logo} alt="" />
        </Link>

        <button
          type="button"
          className="header__menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <nav className="header__navigation">
          <ul className="header__navigation-list">
            <li className="header__navigation-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `header__navigation-link ${isActive ? "header__navigation-link_active" : ""}`
                }
                viewTransition
              >
                Home
              </NavLink>
            </li>
            <li className="header__navigation-item">
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `header__navigation-link ${isActive ? "header__navigation-link_active" : ""}`
                }
                viewTransition
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header__controls">
          <button
            className="header__unit-toggle"
            type="button"
            onClick={onUnitChange}
            aria-label="Toggle temperature unit"
          >
            <span
              className={`header__unit-option ${unit === "celsius" ? "header__unit-option_active" : ""}`}
            >
              °C
            </span>

            <span
              className={`header__unit-option ${unit === "fahrenheit" ? "header__unit-option_active" : ""}`}
            >
              °F
            </span>

            <span
              className={`header__unit-indicator ${
                unit === "fahrenheit" ? "header__unit-indicator_position_right" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div className={`header__mobile-menu ${
        isMenuOpen ? "header__mobile-menu_open" : ""
        }`}>

        <button
            type="button"
            className="header__mobile-close"
            onClick={() => setIsMenuOpen(false)}
        >
            ✕
        </button>

        <div className="header__mobile-navigation">

          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="header__mobile-link"
            viewTransition
          >
            Home
          </NavLink>

          <NavLink
            to="/about-us"
            onClick={() => setIsMenuOpen(false)}
            className="header__mobile-link"
            viewTransition
          >
            About Us
          </NavLink>

        </div>

        <div className="header__mobile-controls">
          <p className="header__mobile-controls-title">
            Temperature
          </p>

          <button
            className="header__unit-toggle header__unit-toggle_mobile"
            type="button"
            onClick={() => {
              onUnitChange();
              setIsMenuOpen(false);
            }}
            aria-label="Toggle temperature unit"
          >
            <span
              className={`header__unit-option ${
                unit === "celsius"
                  ? "header__unit-option_active"
                  : ""
              }`}
            >
              °C
            </span>

            <span
              className={`header__unit-option ${
                unit === "fahrenheit"
                  ? "header__unit-option_active"
                  : ""
              }`}
            >
              °F
            </span>

            <span
              className={`header__unit-indicator ${
                unit === "fahrenheit"
                  ? "header__unit-indicator_position_right"
                  : ""
              }`}
            />
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;
