import { useState, useEffect } from "react";
import { getCoordinates, getWeather } from "../services/api";
import { getWeatherCondition } from "../utils/weatherCodes";
import { getWeatherAssets } from "../utils/weatherAssets";
import { formatHourlyForecast, formatDailyForecast, formatSunTimes } from "../utils/formatData";

export function useWeather(city) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    async function fetchWeather() {
      try {
        setLoading(true);
        setError(null);

        const location = await getCoordinates(city);
        const weather = await getWeather(location.lat, location.lon); // recibe data completo de la api

        const currentWeather = weather.current_weather;

        const condition = getWeatherCondition(currentWeather.weathercode);
        const assets = getWeatherAssets(condition);

        const hourlyForecast = formatHourlyForecast(weather.hourly);
        const dailyForecast = formatDailyForecast(weather.daily);
        const sunTimes = formatSunTimes(weather.daily);

        //temporal
        console.log("full data: ", weather);
        console.log("hourly: ", hourlyForecast);
        console.log("daily: ", dailyForecast);
        console.log("sunTimes: ", sunTimes);

        setData({
          city: location.name,
          country: location.country,
          temperature: currentWeather.temperature,
          weatherCode: currentWeather.weathercode,
          condition,
          hourlyForecast,
          dailyForecast,
          sunTimes,
          ...assets,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  return { data, loading, error };
}
