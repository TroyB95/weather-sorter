let apiKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;
let apiQuery = `http://api.openweathermap.org/data/2.5/group?id=2643744,6455259,6359304&units=metric&APPID=${apiKey}`;

async function getWeatherData() {
  let response = await fetch(apiQuery);
  let data = await response.json();
  return data;
}

export { apiKey, getWeatherData };
