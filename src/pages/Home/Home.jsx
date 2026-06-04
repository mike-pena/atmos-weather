import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getCoordinates } from "../../services/api";
import SearchError from "../../components/SearchError/SearchError";

import "./Home.css";

function Home() {
  
  const navigate = useNavigate();

  const [error, setError] = useState("");

  async function handleSearch(city) {
    const trimmedCity = city.trim();

    if (!trimmedCity) return;

    try {

      await getCoordinates(trimmedCity);

      setError("");

      navigate(`/explorer?city=${encodeURIComponent(city)}`);

    } catch (err) {
    setError("Location not found");
    }
    
  }

  return (
    <>
    <Header variant="about"/>
    <main className="home">
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

        <SearchError message={error} isDay={false}/>

      </section>
    </main>
    </>
  );
}

export default Home;