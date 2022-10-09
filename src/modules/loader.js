async function getWeatherData(lat, lon, key) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`,
    { mode: 'cors', method: 'GET' },
  );
  return res.json();
}

async function getLocationInfo(location, key) {
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${key}`,
    { mode: 'cors', method: 'GET' },
  );
  return (await res.json())[0];
}

async function queryWeather(location) {
  const key = '6c2aaae07b183c9e04e5ac786b6c82d9';
  const locInfo = await getLocationInfo(location, key);
  return getWeatherData(locInfo.lat, locInfo.lon, key);
}

function addEventListeners() {
  document.getElementById('query').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const location = data.get('location');
    queryWeather(location).then((res) => {
      console.log(res);
    });
  });
}

addEventListeners();
