import { useNavigate } from "react-router-dom";
import PageTransition from "../../components/PageTransition/PageTransition";

import "./AboutUs.css";

function AboutUs() {
  const navigate = useNavigate();

  function handleSearch(city) {
    if (!city.trim()) return;

    navigate(`/explorer?city=${encodeURIComponent(city)}`);
  }

  return (
    <PageTransition>
    <main className="about">
        <section className="about__hero">
            <div className="about__hero-content">
              <p className="about__eyebrow">About Atmos</p>

              <h1 className="about__title">Simple weather. Better experience.</h1>

              <p className="about__description">
                Atmos is a modern weather app focused on clarity, real-time
                conditions, and an immersive visual experience that adapts to the
                weather around you.
              </p>
            </div>
        </section>

        <div className="about__transition-overlay"></div>

        <div className="about__wrapper">

          <section className="about__section about__section_intro">
            <div>
              <h2>Built for a better forecast experience.</h2>
              <p>
                Instead of overwhelming users with cluttered screens, Atmos keeps
                the essentials easy to read while using dynamic visuals to make
                the weather feel more alive.
              </p>
            </div>

            <div className="about__card">
              <p>
                Atmos combines accurate forecasts with a cinematic interface that
                adapts to current conditions, time of day, and location.
              </p>
            </div>
          </section>

          <section className="about__section">
            <h2>What Atmos includes</h2>

            <div className="about__features-grid">
              <article className="about__feature-card">
                <span>🌡️</span>
                <h3>Current Weather</h3>
                <p>Instant access to the current temperature and conditions.</p>
              </article>

              <article className="about__feature-card">
                <span>🕒</span>
                <h3>Forecasts</h3>
                <p>Hourly and daily forecasts presented in a clean layout.</p>
              </article>

              <article className="about__feature-card">
                <span>☀️</span>
                <h3>UV Index</h3>
                <p>Simple UV information to help you plan your day.</p>
              </article>

              <article className="about__feature-card">
                <span>🌅</span>
                <h3>Sun Times</h3>
                <p>Sunrise and sunset times based on the selected location.</p>
              </article>

              <article className="about__feature-card">
                <span>🌙</span>
                <h3>Day / Night Mode</h3>
                <p>Visuals that shift depending on local time.</p>
              </article>

              <article className="about__feature-card">
                <span>🎬</span>
                <h3>Cinematic Themes</h3>
                <p>Weather-based backgrounds, moods, and animations.</p>
              </article>
            </div>
          </section>

          <section className="about__section about__section_why">
            <p className="about__eyebrow">Why we built it</p>

            <h2>Most weather apps feel outdated or overloaded.</h2>

            <p>
              Atmos was created to offer a smoother, more polished experience —
              one that keeps the focus on the information that matters without
              sacrificing design.
            </p>

            <p className="about__closing">
              The goal is simple: make checking the weather feel fast, intuitive,
              and enjoyable.
            </p>
          </section>
        </div>
    </main>
    </PageTransition>
  );
}

export default AboutUs;
