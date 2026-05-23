import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./AboutUs.css";

function AboutUs() {
  const navigate = useNavigate();

  function handleSearch(city) {
    if (!city.trim()) return;

    navigate(`/explorer?city=${encodeURIComponent(city)}`);
  }

  return (
    <main className="about">
      
      <section className="hero">
        <div className="about-overlay" />

        <div className="hero-text">
          <h1 className="hero-title">
            Simple weather.<br />
            Better experience.
          </h1>

          <p className="hero-tagline">
            Atmos is a modern weather app focused on clarity, design, and real-time conditions.
            <br />
            Instead of overwhelming users with cluttered interfaces and unnecessary information, 
            Atmos delivers weather data in a clean, immersive, and easy-to-understand way.
          </p>
        </div>
      </section>

      <div>
        <p>
            Atmos combines accurate forecasts with a cinematic interface that adapts 
            to current weather conditions, time of day, and location.
        </p>
        <p>The app includes:</p>
        <ul>
            <li>Current weather conditions</li>
            <li>Hourly and daily forecasts</li>
            <li>UV index</li>
            <li>Sunrise and sunset times</li>
            <li>Dynamic day/night visuals</li>
            <li>Weather-based themes and animations</li>
        </ul>

        <h3>Why We Built It</h3>
        <p>Most weather apps feel outdated or overloaded.</p>
        <p>
            Atmos was created to offer a more modern experience — one that 
            looks polished, feels smooth, and keeps the focus on the 
            information that matters.
        </p>
        <p>
            The goal is simple: Make checking the weather feel fast, intuitive, and enjoyable.
        </p>
      </div>
    </main>
  );
}

export default AboutUs;