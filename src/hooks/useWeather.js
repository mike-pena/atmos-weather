import { useState, useEffect } from "react";
import { getCoordinates, getWeather } from "../services/api";
import { getWeatherCondition } from "../utils/weatherCodes";
import { getWeatherAssets } from "../utils/weatherAssets";

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
        const weather = await getWeather(location.lat, location.lon);
        const condition = getWeatherCondition(weather.weathercode);
        const assets = getWeatherAssets(condition);

        setData({
          city: location.name,
          country: location.country,
          temperature: weather.temperature,
          weatherCode: weather.weathercode,
          condition,
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