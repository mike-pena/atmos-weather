import { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useWeather } from "../../hooks/useWeather";
import Background from "../../components/BackgroundManager/BackgroundManager";
import SearchBar from "../../components/SearchBar/SearchBar";
import HourlyForecast from "../../components/HourlyForecast/HourlyForecast";
import DailyForecast from "../../components/DailyForecast/DailyForecast";
import SunTimes from "../../components/SunTimes/SunTimes";
import WeatherDetailCard from "../../components/WeatherDetailCard/WeatherDetailCard";
import Preloader from "../../components/Preloader/Preloader";

function Explorer() {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const searchCity = searchParams.get("city") || "";

  const { data, loading, error } = useWeather(searchCity);

  // Evitar busqueda vacia
  function handleSearch(city) {
    const trimmedCity = city.trim();

    if (!trimmedCity) return;

    setSearchParams({
      city: trimmedCity,
    });
  }

  return (
    <div>
      <Background video={data?.video || "/videos/default.mp4"} />

      <SearchBar
        variant="explorer"
        onSearch={handleSearch}
      />

      {loading && <Preloader />}

      {error && <p>Error: {error}</p>}

      {data && (
        <div>
          <h1>{data.city}, {data.country}</h1>
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
