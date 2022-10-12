import * as elements from './domelements';

export default (() => {
  const newTimer = (delay = 500) => new Promise((resolve) => {
    setTimeout(() => resolve(), delay);
  });

  const fade = (el) => {
    el.classList.toggle('fade-out');
  };

  const cascade = async (elems) => {
    for (let i = 0; i < elems.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await newTimer(100);
      fade(elems[i]);
    }
  };

  const updateWeather = (info) => {
    const elems = elements.weatherInfoValues;
    elems.location.textContent = info.location;
    elems.tempMin.textContent = info.tempMin;
    elems.tempCurrent.textContent = info.tempCurrent;
    elems.tempMax.textContent = info.tempMax;
    elems.humidity.textContent = info.humidity;
    elems.wind.textContent = info.wind;
    elems.pressure.textContent = info.pressure;
    elems.clouds.textContent = info.clouds;
  };

  const toggleWeather = () => {
    const weatherElements = Object.values(elements.weatherInfo);
    cascade(weatherElements);
  };

  return {
    fade,
    cascade,
    updateWeather,
    toggleWeather,
    newTimer,
  };
})();
