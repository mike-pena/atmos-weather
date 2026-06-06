import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Explorer from "./pages/Explorer/Explorer";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {

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
            <>
              <Header variant="about"/>
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/explorer"
          element={
            <>
              <Explorer />
              <Footer />
            </>
          }
        />
        <Route
          path="/about-us"
          element={
            <>
              <Header variant="about"/>
              <AboutUs />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
