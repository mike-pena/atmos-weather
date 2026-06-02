export function getHumidityMessage(level) {
  switch (level) {
    case "Dry":
      return "Crisp and dry atmosphere";

    case "Comfortable":
      return "Balanced atmospheric conditions";

    case "Humid":
      return "Noticeable moisture in the air";

    case "Very Humid":
      return "Heavy, moisture-rich air";

    default:
      return "";
  }
}