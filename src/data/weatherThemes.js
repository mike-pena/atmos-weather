import clearDayIcon from "../assets/icons/clear-day.svg"
import clearNightIcon from "../assets/icons/clear-night.png"
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

import clearDayAnimation from "../assets/animations/clear-day.json"
import clearNightAnimation from "../assets/animations/clear-night.json"
import cloudyDayAnimation from "../assets/animations/cloudy-day.json"
import cloudyNightAnimation from "../assets/animations/cloudy-night.json"
import rainDayAnimation from "../assets/animations/rain-day.json"
import rainNightAnimation from "../assets/animations/rain-night.json"
import fogDayAnimation from "../assets/animations/fog-day.json"
import fogNightAnimation from "../assets/animations/fog-night.json"
import snowAnimation from "../assets/animations/snow.json"
import stormAnimation from "../assets/animations/storm.json"
import drizzleDayAnimation from "../assets/animations/drizzle-day.json"
import drizzleNightAnimation from "../assets/animations/drizzle-night.json"
import defaultDayAnimation from "../assets/animations/default-day.json"
import defaultNightAnimation from "../assets/animations/default-night.json"


export const weatherThemes = {
  clear: {
    day: {
      video: "clear-day.mp4",
      overlay: "overlay-clear",
      mood: "bright",
      icon: clearDayIcon,
      animation: clearDayAnimation,
    },
    night: {
      video: "clear-night.mp4",
      overlay: "overlay-clear",
      mood: "bright",
      icon: clearNightIcon,
      animation: clearNightAnimation,
    },
  },
  cloudy: {
    day: {
      video: "cloudy-day.mp4",
      overlay: "overlay-cloudy",
      mood: "soft",
      icon: cloudyDayIcon,
      animation: cloudyDayAnimation,
    },
    night: {
      video: "cloudy-night.mp4",
      overlay: "overlay-cloudy",
      mood: "soft",
      icon: cloudyNightIcon,
      animation: cloudyNightAnimation,
    },
  },
  rain: {
    day: {
      video: "rain-day.mp4",
      overlay: "overlay-rain",
      mood: "moody",
      icon: rainDayIcon,
      animation: rainDayAnimation,
    },
    night: {
      video: "rain-night.mp4",
      overlay: "overlay-rain",
      mood: "moody",
      icon: rainNightIcon,
      animation: rainNightAnimation,
    },
  },
  fog: {
    day: {
      video: "fog-day.mp4",
      overlay: "overlay-fog",
      mood: "moody",
      icon: fogDayIcon,
      animation: fogDayAnimation,
    },
    night: {
      video: "fog-night.mp4",
      overlay: "overlay-fog",
      mood: "moody",
      icon: fogNightIcon,
      animation: fogNightAnimation,
    },
  },
  snow: {
    day: {
      video: "snow-day.mp4",
      overlay: "overlay-snow",
      mood: "moody",
      icon: snowDayIcon,
      animation: snowAnimation,
    },
    night: {
      video: "snow-night.mp4",
      overlay: "overlay-snow",
      mood: "moody",
      icon: snowNightIcon,
      animation: snowAnimation,
    },
  },
  storm: {
    day: {
      video: "storm-day.mp4",
      overlay: "overlay-storrm",
      mood: "moody",
      icon: stormDayIcon,
      animation: stormAnimation,
    },
    night: {
      video: "storm-night.mp4",
      overlay: "overlay-storrm",
      mood: "moody",
      icon: stormNightIcon,
      animation: stormAnimation,
    },
  },
  drizzle: {
    day: {
      video: "drizzle-day.mp4",
      overlay: "overlay-drizzle",
      mood: "moody",
      icon: drizzleDayIcon,
      animation: drizzleDayAnimation,
    },
    night: {
      video: "drizzle-night.mp4",
      overlay: "overlay-drizzle",
      mood: "moody",
      icon: drizzleNightIcon,
      animation: drizzleNightAnimation,
    },
  },
  unknown: {
    day: {
      video: "clear-day.mp4",
      overlay: "overlay-default",
      mood: "neutral",
      icon: unknownIcon,
      animation: defaultDayAnimation,
    },
    night: {
      video: "clear-night.mp4",
      overlay: "overlay-default",
      mood: "neutral",
      icon: unknownIcon,
      animation: defaultNightAnimation,
    },
  },
};
