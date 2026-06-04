import { Link, NavLink } from "react-router-dom";

import "./Header.css";

function Header({ variant = "home", isDay }) {

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
                <button aria-label="Mute">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                        <path d="M6 1H8V15H6L2 11H0V5H2L6 1Z" fill="#fff"/>
                        <path d="M14 8C14 5.79086 12.2091 4 10 4V2C13.3137 2 16 4.68629 16 8C16 11.3137 13.3137 14 10 14V12C12.2091 12 14 10.2091 14 8Z" fill="#fff"/>
                        <path d="M12 8C12 9.10457 11.1046 10 10 10V6C11.1046 6 12 6.89543 12 8Z" fill="#fff"/>
                    </svg>
                </button>
                <button>Units</button>
            </div>
        </div>
    </header>
  );
}

export default Header;