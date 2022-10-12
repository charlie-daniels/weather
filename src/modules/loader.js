import weatherAPI from './weatherapi';
import controller from './domcontroller';
import * as elems from './domelements';
import weatherData from './weatherdata';

function setMobileHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function showData(json) {
  let extractedInfo = weatherData.extractData(json);
  extractedInfo = weatherData.toCelcius(extractedInfo);
  controller.updateWeather(extractedInfo);
  controller.revealWeather();
}

function addEventListeners() {
  elems.query.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = new FormData(e.target).get('location');
    e.target.reset();
    controller.fadeOut(elems.query);
    Promise.all([
      weatherAPI.queryWeather(location),
      controller.newTimer(),
    ])
      .then((res) => showData(res[0]))
      .catch((err) => console.log(err));
  });
}

function init() {
  addEventListeners();
  setMobileHeight();
}

init();
