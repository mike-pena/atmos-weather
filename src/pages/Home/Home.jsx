import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getCoordinates } from "../../services/api";
import SearchError from "../../components/SearchError/SearchError";
import PageTransition from "../../components/PageTransition/PageTransition";

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
    <main className="home">
      <PageTransition>
        <section className="home__hero">
          <div className="home__content">
            <h1 className="home__title">Beyond the forecast</h1>

            <p className="home__tagline">
              Experience weather like a scene.
            </p>
          </div>

          <SearchBar
            onSearch={handleSearch}
            variant="main"
          />

          <SearchError message={error} isDay={false}/>

        </section>
      </PageTransition>
    </main>
  );
}

export default Home;