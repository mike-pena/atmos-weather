import clearDayIcon from "../assets/icons/clear-day.svg"
import clearNightIcon from "../assets/icons/clear-night.svg"
import cloudyDayIcon from "../assets/icons/cloudy-day.svg"
import cloudyNightIcon from "../assets/icons/cloudy-day.svg"
import rainDayIcon from "../assets/icons/rain-day.svg"
import rainNightIcon from "../assets/icons/rain-day.svg"
import fogDayIcon from "../assets/icons/fog-day.svg"
import fogNightIcon from "../assets/icons/fog-day.svg"
import snowDayIcon from "../assets/icons/snow-day.svg"
import snowNightIcon from "../assets/icons/snow-day.svg"
import stormDayIcon from "../assets/icons/storm-day.svg"
import stormNightIcon from "../assets/icons/storm-day.svg"
import drizzleDayIcon from "../assets/icons/drizzle-day.svg"
import drizzleNightIcon from "../assets/icons/drizzle-day.svg"
import unknownIcon from "../assets/icons/unknown.svg"

export const weatherThemes = {
  clear: {
    day: {
      video: "clear.mp4",
      overlay: "overlay-clear",
      mood: "bright",
      icon: clearDayIcon,
    },
    night: {
      video: "night-clear.mp4",
      overlay: "overlay-clear",
      mood: "bright",
      icon: clearNightIcon,
    },
  },
  cloudy: {
    day: {
      video: "cloudy.mp4",
      overlay: "overlay-cloudy",
      mood: "soft",
      icon: cloudyDayIcon,
    },
    night: {
      video: "cloudy.mp4",
      overlay: "overlay-cloudy",
      mood: "soft",
      icon: cloudyNightIcon,
    },
  },
  rain: {
    day: {
      video: "rain.mp4",
      overlay: "overlay-rain",
      mood: "moody",
      icon: rainDayIcon,
    },
    night: {
      video: "rain.mp4",
      overlay: "overlay-rain",
      mood: "moody",
      icon: rainNightIcon,
    },
  },
  fog: {
    day: {
      video: "fog.mp4",
      overlay: "overlay-fog",
      mood: "moody",
      icon: fogDayIcon,
    },
    night: {
      video: "fog.mp4",
      overlay: "overlay-fog",
      mood: "moody",
      icon: fogNightIcon,
      
    },
  },
  snow: {
    day: {
      video: "snow.mp4",
      overlay: "overlay-snow",
      mood: "moody",
      icon: snowDayIcon,
    },
    night: {
      video: "snow.mp4",
      overlay: "overlay-snow",
      mood: "moody",
      icon: snowNightIcon,
    },
  },
  storm: {
    day: {
      video: "storm.mp4",
      overlay: "overlay-storrm",
      mood: "moody",
      icon: stormDayIcon,
    },
    night: {
      video: "storm.mp4",
      overlay: "overlay-storrm",
      mood: "moody",
      icon: stormNightIcon,
    },
  },
  drizzle: {
    day: {
      video: "drizzle.mp4",
      overlay: "overlay-drizzle",
      mood: "moody",
      icon: drizzleDayIcon,
    },
    night: {
      video: "drizzle.mp4",
      overlay: "overlay-drizzle",
      mood: "moody",
      icon: drizzleNightIcon,
    },
  },
  unknown: {
    day: {
      video: "default.mp4",
      overlay: "overlay-default",
      mood: "neutral",
      icon: unknownIcon,
    },
    night: {
      video: "default.mp4",
      overlay: "overlay-default",
      mood: "neutral",
      icon: unknownIcon,
    },
  },
};
