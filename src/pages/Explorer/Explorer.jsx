import { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useWeather } from "../../hooks/useWeather";
import Background from "../../components/BackgroundManager/BackgroundManager";
import SearchBar from "../../components/SearchBar/SearchBar";
import HourlyForecast from "../../components/HourlyForecast/HourlyForecast";
import DailyForecast from "../../components/DailyForecast/DailyForecast";
import Preloader from "../../components/Preloader/Preloader";
import ForecastMain from "../../components/ForecastMain/ForecastMain";
import SunTimes from "../../components/SunTimes/SunTimes";
import UVIndex from "../../components/UVIndex/UvIndex";
import WeatherDetailCard from "../../components/WeatherDetailCard/WeatherDetailCard";
import WindDirection from "../../components/WindDirection/WindDirection";

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

              <UVIndex
                label="UV Index"
                value={data?.uvIndex?.value}
                description={`${data?.uvIndex?.message}`}
                isDay={data.sunTimes.isDay}
                currentLevel={data?.uvIndex?.level}
              />

              <div className="extra-metrics-sm">
                <WeatherDetailCard
                  label="Wind Speed"
                  value={`${data?.wind?.speed} km/h`}
                  isDay={data.sunTimes.isDay}
                  extraContent={<WindDirection direction={data?.wind.direction} />}
                />
                <WeatherDetailCard
                  label="Humidity"
                  value={`${data?.humidity?.value}%`}
                  description={data?.humidity?.level}
                  isDay={data.sunTimes.isDay}
                  extraContent={data.humidity.message}
                />
              </div>
{/*
              <p>Humidity: {data?.humidity?.value}%</p>
              <p>{data.humidity.level}</p>
              <p>{data.humidity.message}</p>
*/}
            </div>
          </div>
          

        </div>
      )}
    </div>
  );
}

export default Explorer;
