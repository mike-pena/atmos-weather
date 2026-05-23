import { useState } from "react";

import "./SearchBar.css";

function SearchBar({ onSearch, variant = "explorer" }) {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch(city);

    setCity("");
  }

  return (
    <form
      className={`search-bar ${variant}`}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit" className={`search-button ${variant}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none">
        <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </form>
  );
}

export default SearchBar;