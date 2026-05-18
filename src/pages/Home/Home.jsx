import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

import "./Home.css";

function Home() {
  const navigate = useNavigate();

  function handleSearch(city) {
    if (!city.trim()) return;

    navigate(`/explorer?city=${encodeURIComponent(city)}`);
  }

  return (
    <main className="home">
      <div className="home-overlay" />

      <section className="hero">
        <h1 className="hero-title">Cinematic Weather</h1>

        <p className="hero-tagline">
          Experience weather like a scene.
        </p>

        <SearchBar
          onSearch={handleSearch}
          variant="hero"
        />
      </section>
    </main>
  );
}

export default Home;