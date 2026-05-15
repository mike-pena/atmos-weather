import { getWeatherCondition } from "./weatherCodes";

export function formatHourlyForecast(hourlyData) {
  const times = hourlyData.time.slice(0, 24);

  return times.map((time, index) => {
    const weatherCode = hourlyData.weather_code[index];

    const formattedTime = new Date(time).toLocaleTimeString(
      [],
      {
        hour: "numeric",
        hour12: true,
      }
    );

    return {
      time: formattedTime,
      fullTime: time,
      temperature: hourlyData.temperature_2m[index],
      weatherCode,
      precipitationProbability:
      hourlyData.precipitation_probability[index],
      condition: getWeatherCondition(weatherCode),
    };
  });
}