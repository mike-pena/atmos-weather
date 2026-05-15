import { weatherThemes } from "../data/weatherThemes";

export function getWeatherAssets(condition) {
  return weatherThemes[condition] || weatherThemes.default;
}