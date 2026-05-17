import { weatherThemes } from "../data/weatherThemes";

export function getWeatherAssets(condition, isDay) {
  const timeOfDay = isDay ? "day" : "night";

  return (
    weatherThemes[condition]?.[timeOfDay] ||
    weatherThemes.default
  );
}