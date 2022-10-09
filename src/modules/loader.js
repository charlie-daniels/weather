import weather from './weatherapi';

function addEventListeners() {
  document.getElementById('query').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const location = data.get('location');
    weather.queryWeather(location).then((res) => {
      console.log(res);
    })
      .catch((err) => console.log(err));
  });
}

function setMobileHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function init() {
  addEventListeners();
  setMobileHeight();
}

init();
