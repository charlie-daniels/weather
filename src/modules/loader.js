import weather from './weatherapi';
import controller from './domcontroller';

function setMobileHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function addEventListeners() {
  document.getElementById('query').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const location = data.get('location');
    controller.fadeOut(e.target);
    e.target.reset();
    const animationTimer = new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
    Promise.all([
      weather.queryWeather(location),
      animationTimer,
    ])
      .then((res) => {
        controller.fadeIn(e.target);
      })
      .catch((err) => console.log(err));
  });
}

function init() {
  addEventListeners();
  setMobileHeight();
}

init();
