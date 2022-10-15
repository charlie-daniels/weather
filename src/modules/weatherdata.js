export default (() => {
  const to1DP = (num) => Math.round(num * 10) / 10;

  const toFarenheit = (info) => {
    const convert = (kelvin) => {
      const absZero = 273.15;
      return ((9 / 5) * (kelvin - absZero)) + 32;
    };
    const newInfo = { ...info };
    newInfo.tempMin = to1DP(convert(info.tempMin));
    newInfo.tempCurrent = to1DP(convert(info.tempCurrent));
    newInfo.tempMax = to1DP(convert(info.tempMax));
    return newInfo;
  };

  const toCelcius = (info) => {
    const convert = (kelvin) => {
      const absZero = 273.15;
      return kelvin - absZero;
    };
    const newInfo = { ...info };
    newInfo.tempMin = to1DP(convert(info.tempMin));
    newInfo.tempCurrent = to1DP(convert(info.tempCurrent));
    newInfo.tempMax = to1DP(convert(info.tempMax));
    return newInfo;
  };

  const extractData = (json) => {
    const data = {
      location: json.name,
      tempMin: json.main.temp_min,
      tempCurrent: json.main.temp,
      tempMax: json.main.temp_max,
      humidity: json.main.humidity,
      wind: json.wind.speed,
      pressure: json.main.pressure,
      clouds: json.weather[0].description,
    };
    return data;
  };

  function updateTemperature(data, unit) {
    if (unit === 'farenheit') return toFarenheit(data);
    return toCelcius(data);
  }

  return {
    extractData,
    updateTemperature,
  };
})();
