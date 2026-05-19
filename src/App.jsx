import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Explorer from "./pages/Explorer/Explorer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" 
        element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
        } 
        />
        <Route path="/explorer" 
        element={
          <>
            <Header />
            <Explorer />
            <Footer />
          </>
        } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
