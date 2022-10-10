import weather from './weatherapi';
import controller from './domcontroller';
import * as elems from './domelements';

function setMobileHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function revealWeather() {
  controller.show(document.getElementById('weather-wrapper'));
  const hiddenElements = Array.from(document.querySelectorAll('.fade-out'));
  setTimeout(() => {
    controller.cascade(hiddenElements);
  }, 500);
}

function extractInfo(json) {
  return {
    temp: {
      min: json.main.temp_min,
      current: json.main.temp,
      max: json.main.temp_max,
    },
    humidity: json.main.humidity,
    wind: json.wind.speed,
    pressure: json.main.pressure,
    clouds: json.weather[0].description,
  };
}

function addEventListeners() {
  elems.query.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const location = data.get('location');
    controller.fadeOut(e.target);
    e.target.reset();
    const animationTimer = new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
    Promise.all([
      weather.queryWeather(location),
      animationTimer,
    ])
      .then((res) => {
        revealWeather();
        const extractedInfo = extractInfo(res[0]);
        controller.updateWeather(extractedInfo);
      })
      .catch((err) => console.log(err));
  });
}

function init() {
  addEventListeners();
  setMobileHeight();
}

init();
// revealWeather();
