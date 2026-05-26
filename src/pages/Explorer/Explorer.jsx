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
//import UVIndex from "../../components/UVIndex/UvIndex";
import Preloader from "../../components/Preloader/Preloader";
import ForecastMain from "../../components/ForecastMain/ForecastMain";
import UVLevel from "../../components/UVLevel/UVLevel";

import "./Explorer.css";

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

      {loading && <Preloader />}

      {error && <p>Error: {error}</p>}

      {data && (
        <div className="explorer-container">
          <div className="explorer-top">
            <ForecastMain data={data}/>
            <div>
              <SearchBar
              variant="explorer"
              onSearch={handleSearch}
              />
            </div>
          </div>

          <HourlyForecast forecast={data.hourlyForecast} isDay={data.sunTimes.isDay} />

          {/*
            <p>Mood: {data.mood}</p>
          <p>Video: {data.video}</p>
          <p>Weather Code: {data.weatherCode}</p>
          */}

          <div className="explorer-bottom-section">
            <DailyForecast forecast={data.dailyForecast} isDay={data.sunTimes.isDay} />

            <div className="extra-metrics">
              <SunTimes data={data.sunTimes} isDay={data.sunTimes.isDay} />

              <WeatherDetailCard
                label="UV Index"
                value={data?.uvIndex?.value}
                description={`${data?.uvIndex?.message}`}
                isDay={data.sunTimes.isDay}
                extraContent={<UVLevel currentLevel={data?.uvIndex?.level}/>}
              />

              <WeatherDetailCard
                label="Wind Speed"
                value={data?.uvIndex?.value}
                description={`${data?.uvIndex?.message}`}
                isDay={data.sunTimes.isDay}
              />
            </div>
          </div>
          
          
          {/*
          <div>
            <p>UV Index: {data?.uvIndex?.value}</p>
            <p>Level: {data?.uvIndex?.level}</p>
          </div>
          */}

          

        </div>
      )}
    </div>
  );
}

export default Explorer;
