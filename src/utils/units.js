export const temperatureUnits = {
  celsius: {
    apiValue: "celsius",
    symbol: "°C",
  },
  fahrenheit: {
    apiValue: "fahrenheit",
    symbol: "°F",
  },
};

export function getTemperatureUnitSymbol(unit) {
  return temperatureUnits[unit]?.symbol || "°C";
}

export function getTemperatureUnitApiValue(unit) {
  return temperatureUnits[unit]?.apiValue || "celsius";
}