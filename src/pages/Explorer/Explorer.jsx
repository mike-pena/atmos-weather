import { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useWeather } from "../../hooks/useWeather";
import Header from "../../components/Header/Header";
import Background from "../../components/BackgroundManager/BackgroundManager";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchError from "../../components/SearchError/SearchError";
import HourlyForecast from "../../components/HourlyForecast/HourlyForecast";
import DailyForecast from "../../components/DailyForecast/DailyForecast";
import Preloader from "../../components/Preloader/Preloader";
import ForecastMain from "../../components/ForecastMain/ForecastMain";
import SunTimes from "../../components/SunTimes/SunTimes";
import UVIndex from "../../components/UVIndex/UvIndex";
import WeatherDetailCard from "../../components/WeatherDetailCard/WeatherDetailCard";
import WindDirection from "../../components/WindDirection/WindDirection";

import "./Explorer.css";

function Explorer({ unit, onUnitChange }) {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const searchCity = searchParams.get("city") || "";

  const { data, loading, error } = useWeather(searchCity, unit);
  
  // Evitar busqueda vacia
  function handleSearch(city) {
    const trimmedCity = city.trim();

    if (!trimmedCity) return;

    setSearchParams({
      city: trimmedCity,
    });
  }

  if (!data && error) {
    return (
      <div className="explorer__error-state-container">
        <Background video="/error.mp4" />

        <div className="explorer__error-state">
          
          <p className="explorer__error-state-title">No results for "{searchCity}"</p>
          <SearchError message={error} errorState={true}/>
          <SearchBar
            variant="explorer-secondary"
            onSearch={handleSearch}
          />
        </div>
      </div>
    );
  }
  return (
    <>
      <Header variant="explorer" isDay={data?.sunTimes.isDay} unit={unit} onUnitChange={onUnitChange}/>
      
      <Background video={data?.video || "/default.mp4"} />
      {/*<Background video={"/storm.mp4"} />*/}

      {loading && <Preloader />}

      {data && (
        <div className="explorer__container">
          <div className="explorer__top">
            <ForecastMain data={data}/>
            <div>
              <SearchBar
              variant="explorer"
              onSearch={handleSearch}
              />
              <SearchError message={error} isDay={data.sunTimes.isDay}/>
            </div>
          </div>

          <HourlyForecast forecast={data.hourlyForecast} isDay={data.sunTimes.isDay} temperatureUnit={data.units.temperature}/>

          <div className="explorer__bottom">
            <DailyForecast forecast={data.dailyForecast} isDay={data.sunTimes.isDay} temperatureUnit={data.units.temperature}/>

            <div className="explorer__metrics">
              <SunTimes data={data.sunTimes} isDay={data.sunTimes.isDay} />

              <UVIndex
                label="UV Index"
                value={data?.uvIndex?.value}
                description={`${data?.uvIndex?.message}`}
                isDay={data.sunTimes.isDay}
                currentLevel={data?.uvIndex?.level}
              />

              <div className="explorer__metrics-secondary">
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

            </div>
          </div>
          

        </div>
      )}

    </>
  );
}

export default Explorer;
