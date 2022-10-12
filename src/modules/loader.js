import weatherAPI from './weatherapi';
import controller from './domcontroller';
import * as elements from './domelements';
import weatherData from './weatherdata';

function setMobileHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function showData(info) {
  controller.updateWeather(info);
  controller.toggleWeather();
}

function displayQuery(location) {
  Promise.all([
    weatherAPI.queryWeather(location),
    controller.newTimer(1000),
  ])
    .then((res) => {
      let extractedInfo = weatherData.extractData(res[0]);
      extractedInfo = weatherData.toCelcius(extractedInfo);
      showData(extractedInfo);
    })
    .catch((err) => console.log(err));
}

function addEventListeners() {
  elements.query.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = new FormData(elements.query).get('location');
    elements.query.reset();
    controller.cascade(Object.values(elements.weatherInfo));
    displayQuery(location);
  });
}

function init() {
  addEventListeners();
  setMobileHeight();
  controller.toggleWeather();
  displayQuery('London');
}

init();
