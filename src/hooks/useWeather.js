import { useState, useEffect } from "react";
import { getCoordinates, getWeather } from "../services/api";
import { getWeatherCondition } from "../utils/weatherCodes";
import { getWeatherAssets } from "../utils/weatherAssets";
import {
  formatHourlyForecast,
  formatDailyForecast,
  formatLocalTime,
  formatSunTimes,
  getUVLevel,
  getUVMessage,
} from "../utils/formatData";
import { getCurrentUVIndex } from "../utils/getCurrentUVIndex";
import { getWindDirectionLabel } from "../utils/getWindDirectionLabel";
import { getCurrentHumidity } from "../utils/getCurrentHumidity";
import { getHumidityLevel } from "../utils/getHumidityLevel";
import { getHumidityMessage } from "../utils/getHumidityMessage";
import { getTemperatureUnitSymbol } from "../utils/units";

export function useWeather(city, unit) {
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
        const weather = await getWeather(location.lat, location.lon, unit); // recibe data completo de la api

        const currentWeather = weather.current;
        const currentTime = currentWeather.time;

        const condition = getWeatherCondition(currentWeather.weather_code);
         
        const formattedTime = formatLocalTime(currentTime);
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
        const windData = {
          speed: currentWeather.wind_speed_10m,
          direction: currentWeather.wind_direction_10m,
          directionLabel: getWindDirectionLabel(currentWeather.wind_direction_10m),
        };
        const humidity = getCurrentHumidity(weather.hourly,currentTime);
        const humidityLevel = getHumidityLevel(humidity);
        const humidityData = {
          value: humidity,
          level: humidityLevel,
          message: getHumidityMessage(humidityLevel),
        };

        setData({
          city: location.name,
          country: location.country,
          units: {
            temperature: getTemperatureUnitSymbol(unit),
          },
          temperature: currentWeather.temperature_2m,
          weatherCode: currentWeather.weather_code,
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
          formattedTime,
          wind: windData,
          feelsLike: {
            value: currentWeather.apparent_temperature,
          },
          humidity: humidityData,
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
  }, [city, unit]);

  return { data, loading, error };
}
