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
      setTimeout(() => resolve(), 750);
    });
    Promise.all([
      weather.queryWeather(location),
      animationTimer,
    ])
      .then((res) => {
        controller.show(document.getElementById('weather-wrapper'));
        const hiddenElements = Array.from(document.querySelectorAll('.fade-out'));
        setTimeout(() => {
          controller.fadeIn(e.target);
          controller.cascade(hiddenElements);
        }, 750);
      })
      .catch((err) => console.log(err));
  });
}

function init() {
  addEventListeners();
  setMobileHeight();
}

init();
