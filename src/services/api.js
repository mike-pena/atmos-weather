const GEO_BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_BASE_URL = "https://api.open-meteo.com/v1/forecast";

// 1. Obtener coordenadas desde nombre de ciudad
export async function getCoordinates(city) {
  const response = await fetch(`${GEO_BASE_URL}?name=${city}&count=1`);

  if (!response.ok) {
    throw new Error("Error fetching coordinates");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found");
  }

  const { latitude, longitude, name, country } = data.results[0];

  return {
    lat: latitude,
    lon: longitude,
    name,
    country,
  };
}

// 2. Obtener clima actual usando lat/lon
export async function getWeather(lat, lon) {
  const response = await fetch(
    `${WEATHER_BASE_URL}?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset&timezone=auto`,
  );

  if (!response.ok) {
    throw new Error("Error fetching weather");
  }

  const data = await response.json();

  return data;
}
