export default (() => {
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

  const toCelcius = (info) => {
    const convert = (kelvin) => {
      const absZero = 273.15;
      return kelvin - absZero;
    };
    const to1DP = (num) => Math.round(num * 10) / 10;
    const newInfo = info;
    newInfo.tempMin = to1DP(convert(info.tempMin));
    newInfo.tempCurrent = to1DP(convert(info.tempCurrent));
    newInfo.tempMax = to1DP(convert(info.tempMax));
    return newInfo;
  };

  return {
    extractData,
    toCelcius,
  };
})();
