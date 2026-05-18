import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useWeather } from "../../hooks/useWeather";
import Background from "../../components/BackgroundManager/BackgroundManager";
import HourlyForecast from "../../components/HourlyForecast/HourlyForecast";
import DailyForecast from "../../components/DailyForecast/DailyForecast";
import SunTimes from "../../components/SunTimes/SunTimes";
import WeatherDetailCard from "../../components/WeatherDetailCard/WeatherDetailCard";
import Preloader from "../../components/Preloader/Preloader";

function Explorer() {
  
  const [inputValue, setInputValue] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const { data, loading, error } = useWeather(searchCity);

  // Evitar busqueda vacia
  function handleSearch() {
    const trimmedCity = inputValue.trim();

    if (!trimmedCity) return;

    setSearchCity(trimmedCity);
  }

  // Busqueda con ENTER
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <div>
      <Background video={data?.video || "/videos/default.mp4"} />
      <h1>Explorer</h1>

      <input
        type="text"
        placeholder="Search city"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <Preloader />}

      {error && <p>Error: {error}</p>}

      {data && (
        <div>
          <p>
            City: {data.city}, {data.country}
          </p>
          <p>Time: {data.currentTime}</p>
          <p>Temperature: {data.temperature}°C</p>
          <p>Weather Code: {data.weatherCode}</p>
          <p>Condition: {data.condition}</p>
          <p>Mood: {data.mood}</p>
          <p>Video: {data.video}</p>

          <hr />
          <SunTimes data={data.sunTimes} />
          
          {/*
          <div>
            <p>UV Index: {data?.uvIndex?.value}</p>
            <p>Level: {data?.uvIndex?.level}</p>
          </div>
          */}

          <WeatherDetailCard
            label="UV Index"
            value={data?.uvIndex?.value}
            description={`${data?.uvIndex?.level} • ${data?.uvIndex?.message}`}
          />

          <hr />
          <h2>Hourly Forecast</h2>
          <HourlyForecast forecast={data.hourlyForecast} />

          <hr />
          <h2>Daily Forecast</h2>
          <DailyForecast forecast={data.dailyForecast} />
        </div>
      )}
    </div>
  );
}

export default Explorer;
