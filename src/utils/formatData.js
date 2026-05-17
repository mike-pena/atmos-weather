import { getWeatherCondition } from "./weatherCodes";

export function formatHourlyForecast(hourlyData) {
  const times = hourlyData.time.slice(0, 24);

  return times.map((time, index) => {
    const weatherCode = hourlyData.weather_code[index];

    const formattedTime = new Date(time).toLocaleTimeString([], {
      hour: "numeric",
      hour12: true,
    });

    return {
      time: formattedTime,
      fullTime: time,
      temperature: hourlyData.temperature_2m[index],
      weatherCode,
      precipitationProbability: hourlyData.precipitation_probability[index],
      condition: getWeatherCondition(weatherCode),
    };
  });
}

export function formatDailyForecast(dailyData) {
  return dailyData.time.slice(0, 7).map((date, index) => ({
    date,

    day: new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
      weekday: "short",
    }),

    maxTemp: dailyData.temperature_2m_max[index],

    minTemp: dailyData.temperature_2m_min[index],

    weatherCode: dailyData.weather_code[index],

    precipitationProbability: dailyData.precipitation_probability_max[index],

    condition: getWeatherCondition(dailyData.weather_code[index]),
  }));
}

export function formatSunTimes(daily, currentTime) {
  const sunriseDate = new Date(daily.sunrise[0]);
  const sunsetDate = new Date(daily.sunset[0]);
  const currentDate = new Date(currentTime);

  const isDay =
    currentDate >= sunriseDate &&
    currentDate < sunsetDate;

  return {
    sunrise: sunriseDate.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    }),

    sunset: sunsetDate.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    }),

    isDay,
  };
}