export default (() => {
  const getWeatherData = async (lat, lon, key) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`,
      { mode: 'cors', method: 'GET' },
    );
    return res.json();
  };

  const getLocationInfo = async (location, key) => {
    const res = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${key}`,
      { mode: 'cors', method: 'GET' },
    );
    return (await res.json())[0];
  };

  const queryWeather = async (location) => {
    const key = '6c2aaae07b183c9e04e5ac786b6c82d9';
    const locInfo = await getLocationInfo(location, key);
    return getWeatherData(locInfo.lat, locInfo.lon, key);
  };

  return { queryWeather };
})();
