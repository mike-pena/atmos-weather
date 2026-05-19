import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
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
        <div className="hero-text">
          <h1 className="hero-title">Beyond the forecast</h1>

          <p className="hero-tagline">
            Experience weather like a scene.
          </p>
        </div>

        <SearchBar
          onSearch={handleSearch}
          variant="main"
        />
      </section>
    </main>
  );
}

export default Home;