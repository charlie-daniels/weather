import weatherAPI from './weatherapi';
import controller from './domcontroller';
import * as elements from './domelements';
import weatherData from './weatherdata';

let currentData;

function setMobileHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function displayQuery(location) {
  Promise.all([
    weatherAPI.queryWeather(location),
    controller.newTimer(1000),
  ])
    .then((res) => {
      currentData = weatherData.extractData(res[0]);
      const newData = weatherData.updateTemperature(currentData, controller.getUnit());
      controller.showData(newData);
    })
    .catch((err) => {
      console.log(err);
      controller.cascade(Object.values(elements.weatherInfo));
    });
}

function toggleUnits() {
  elements.weatherInfo.temp.classList.toggle('celcius');
  elements.weatherInfo.temp.classList.toggle('farenheit');
  const newData = weatherData.updateTemperature(currentData, controller.getUnit());
  controller.updateWeather(newData);
}

function addEventListeners() {
  elements.query.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = new FormData(elements.query).get('location');
    elements.query.reset();
    controller.cascade(Object.values(elements.weatherInfo));
    displayQuery(location);
  });

  elements.tempUnits.celcius.addEventListener('change', toggleUnits);
  elements.tempUnits.farenheit.addEventListener('change', toggleUnits);
}

function init() {
  addEventListeners();
  setMobileHeight();
  // controller.toggleWeather();
  // displayQuery('London');
}

init();
