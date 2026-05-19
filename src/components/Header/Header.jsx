import { Link, NavLink } from "react-router-dom";

import "./Header.css";

function Header({ variant = "home" }) {

  return (
    <header className={`header header-${variant}`}>
        <div className="header__container">
            <Link to="/" className="logo">
                <img src="src\assets\images\logo.png" alt="" />
            </Link>
            <nav>
                <ul className="navigation-list">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                        >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about-us"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                        >
                        About Us
                    </NavLink>
                </ul>
            </nav>
            <div className="controls">
                <button>Volume</button>
                <button>Units</button>
            </div>
        </div>
    </header>
  );
}

export default Header;