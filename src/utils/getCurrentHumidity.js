export function getCurrentHumidity(hourlyData, currentTime) {
  const currentHour = new Date(currentTime).getHours();

  const currentIndex = hourlyData.time.findIndex((time) => {
    const hour = new Date(time).getHours();

    return hour === currentHour;
  });

  return hourlyData.relative_humidity_2m[currentIndex];
}