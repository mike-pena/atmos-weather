import { useState, useEffect } from "react";
import { getCoordinates, getWeather } from "../services/api";
import { getWeatherCondition } from "../utils/weatherCodes";
import { getWeatherAssets } from "../utils/weatherAssets";
import {
  formatHourlyForecast,
  formatDailyForecast,
  formatSunTimes,
  getUVLevel,
  getUVMessage,
} from "../utils/formatData";
import { getCurrentUVIndex } from "../utils/getCurrentUVIndex";

export function useWeather(city) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    let startTime;

    async function fetchWeather() {
      try {
        setLoading(true);
        setError(null);

        startTime = Date.now();

        const location = await getCoordinates(city);
        const weather = await getWeather(location.lat, location.lon); // recibe data completo de la api

        const currentWeather = weather.current_weather;
        const currentTime = currentWeather.time;

        const condition = getWeatherCondition(currentWeather.weathercode);

        const hourlyForecast = formatHourlyForecast(
          weather.hourly,
          currentTime,
        );
        const dailyForecast = formatDailyForecast(weather.daily);
        const sunTimes = formatSunTimes(weather.daily, currentTime);
        const currentUVIndex = getCurrentUVIndex(weather.hourly, currentTime);
        const uvLevel = getUVLevel(currentUVIndex);
        const uvMessage = getUVMessage(uvLevel);
        const assets = getWeatherAssets(condition, sunTimes.isDay);

        //temporal
        console.log("full data: ", weather);
        console.log("condition", condition);
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
          uvIndex: {
            value: currentUVIndex,
            level: uvLevel,
            message: uvMessage,
          },
          currentTime,
          ...assets,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        const elapsedTime = Date.now() - startTime;

        const minimumLoadingTime = 900;

        const remainingTime = minimumLoadingTime - elapsedTime;

        if (remainingTime > 0) {
          await new Promise((resolve) => setTimeout(resolve, remainingTime));
        }

        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  return { data, loading, error };
}
