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

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;