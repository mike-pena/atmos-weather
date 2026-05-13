export function getWeatherCondition(code) {
  if (code === 0) return "clear";

  if ([1, 2, 3].includes(code)) return "cloudy";

  if ([45, 48].includes(code)) return "fog";

  if ([51, 53, 55].includes(code)) return "drizzle";

  if ([61, 63, 65].includes(code)) return "rain";

  if ([71, 73, 75].includes(code)) return "snow";

  if ([95, 96, 99].includes(code)) return "storm";

  return "unknown";
}