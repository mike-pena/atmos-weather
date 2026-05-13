export function getWeatherAssets(condition) {
  const map = {
    clear: {
      video: "clear.mp4",
      mood: "bright",
    },
    cloudy: {
      video: "cloudy.mp4",
      mood: "soft",
    },
    rain: {
      video: "rain.mp4",
      mood: "dark",
    },
    fog: {
      video: "fog.mp4",
      mood: "mysterious",
    },
    snow: {
      video: "snow.mp4",
      mood: "quiet",
    },
    storm: {
      video: "storm.mp4",
      mood: "intense",
    },
    drizzle: {
      video: "drizzle.mp4",
      mood: "calm",
    },
    unknown: {
      video: "default.mp4",
      mood: "neutral",
    },
  };

  return map[condition] || map["unknown"];
}