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
      <section className="about-hero">
          <div className="about-hero__content">
            <p className="about-eyebrow">About Atmos</p>

            <h1 className="about-title">Simple weather. Better experience.</h1>

            <p className="about-description">
              Atmos is a modern weather app focused on clarity, real-time
              conditions, and an immersive visual experience that adapts to the
              weather around you.
            </p>
          </div>
      </section>
      <div className="about-wrapper">

        <section className="about-section about-intro">
          <div>
            <h2>Built for a better forecast experience.</h2>
            <p>
              Instead of overwhelming users with cluttered screens, Atmos keeps
              the essentials easy to read while using dynamic visuals to make
              the weather feel more alive.
            </p>
          </div>

          <div className="about-card">
            <p>
              Atmos combines accurate forecasts with a cinematic interface that
              adapts to current conditions, time of day, and location.
            </p>
          </div>
        </section>

        <section className="about-section">
          <h2>What Atmos includes</h2>

          <div className="features-grid">
            <article className="feature-card">
              <span>🌡️</span>
              <h3>Current Weather</h3>
              <p>Instant access to the current temperature and conditions.</p>
            </article>

            <article className="feature-card">
              <span>🕒</span>
              <h3>Forecasts</h3>
              <p>Hourly and daily forecasts presented in a clean layout.</p>
            </article>

            <article className="feature-card">
              <span>☀️</span>
              <h3>UV Index</h3>
              <p>Simple UV information to help you plan your day.</p>
            </article>

            <article className="feature-card">
              <span>🌅</span>
              <h3>Sun Times</h3>
              <p>Sunrise and sunset times based on the selected location.</p>
            </article>

            <article className="feature-card">
              <span>🌙</span>
              <h3>Day / Night Mode</h3>
              <p>Visuals that shift depending on local time.</p>
            </article>

            <article className="feature-card">
              <span>🎬</span>
              <h3>Cinematic Themes</h3>
              <p>Weather-based backgrounds, moods, and animations.</p>
            </article>
          </div>
        </section>

        <section className="about-section about-why">
          <p className="about-eyebrow">Why we built it</p>

          <h2>Most weather apps feel outdated or overloaded.</h2>

          <p>
            Atmos was created to offer a smoother, more polished experience —
            one that keeps the focus on the information that matters without
            sacrificing design.
          </p>

          <p className="about-closing">
            The goal is simple: make checking the weather feel fast, intuitive,
            and enjoyable.
          </p>
        </section>
      </div>
    </main>
  );
}

export default AboutUs;
