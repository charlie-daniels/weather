import * as elements from './domelements';

export default (() => {
  const hide = (el) => {
    el.classList.add('hidden');
  };

  const show = (el) => {
    el.classList.remove('hidden');
  };

  const newTimer = (delay) => new Promise((resolve) => {
    setTimeout(() => resolve(), delay);
  });

  const fadeIn = (el) => {
    el.classList.add('transition');
    el.classList.remove('fade-out');
  };

  const fadeOut = (el) => {
    el.classList.add('fade-out', 'transition');
  };

  const cascade = async (elems) => {
    for (let i = 0; i < elems.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await newTimer(100);
      fadeIn(elems[i]);
    }
  };

  const updateWeather = (info) => {
    const elems = elements.weatherInfoValues;
    elems.location = info.location;
    elems.tempMin.textContent = info.tempMin;
    elems.tempCurrent.textContent = info.tempCurrent;
    elems.tempMax.textContent = info.tempMax;
    elems.humidity.textContent = info.humidity;
    elems.wind.textContent = info.wind;
    elems.pressure.textContent = info.pressure;
    elems.clouds.textContent = info.clouds;
  };

  const revealWeather = () => {
    show(elements.weatherWrapper);
    const weatherElements = Object.values(elements.weatherInfo);
    weatherElements.unshift(elements.query);
    cascade(weatherElements);
  };

  return {
    hide,
    show,
    fadeIn,
    fadeOut,
    cascade,
    updateWeather,
    revealWeather,
    newTimer,
  };
})();
