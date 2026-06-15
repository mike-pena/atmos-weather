import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Explorer from "./pages/Explorer/Explorer";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  const TEMPERATURE_UNIT_STORAGE_KEY = "temperatureUnit";

  const [temperatureUnit, setTemperatureUnit] = useState(() => {
    return localStorage.getItem(TEMPERATURE_UNIT_STORAGE_KEY) || "celsius";
  });

  const toggleTemperatureUnit = () => {
    setTemperatureUnit((currentUnit) =>
      currentUnit === "celsius" ? "fahrenheit" : "celsius",
    );
  };

  useEffect(() => {
    localStorage.setItem(TEMPERATURE_UNIT_STORAGE_KEY, temperatureUnit);
  }, [temperatureUnit]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="home-page">
              <Header
                variant="about"
                unit={temperatureUnit}
                onUnitChange={toggleTemperatureUnit}
              />
              <Home />
              <Footer />
            </div>
          }
        />
        <Route
          path="/explorer"
          element={
            <>
              <Explorer
                unit={temperatureUnit}
                onUnitChange={toggleTemperatureUnit}
              />
              <Footer variant="explorer"/>
            </>
          }
        />
        <Route
          path="/about-us"
          element={
            <>
              <Header
                variant="about"
                unit={temperatureUnit}
                onUnitChange={toggleTemperatureUnit}
              />
              <AboutUs />
              <Footer/>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
