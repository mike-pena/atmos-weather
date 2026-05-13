import { useState } from "react";
import { useWeather } from "../../hooks/useWeather";

function Explorer() {
  const [city, setCity] = useState("Cancun");
  const { data, loading, error } = useWeather(city);

  return (
    <div>
      <h1>Explorer</h1>

      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {data && (
        <div>
          <p>
            City: {data.city}, {data.country}
          </p>
          <p>Temperature: {data.temperature}°C</p>
          <p>Weather Code: {data.weatherCode}</p>
          <p>Condition: {data.condition}</p>
          <p>Mood: {data.mood}</p>
          <p>Video: {data.video}</p>
        </div>
      )}
    </div>
  );
}

export default Explorer;
