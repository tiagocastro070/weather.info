const fetch = require('node-fetch');
const { baseUrl, headers } = require('../services.js');

module.exports = function(request, response) {
  const { city } = request.params

  fetch( `${baseUrl}forecast.json?days=1&q=${city}`, {
    method: 'GET',
    headers
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    const details = {
      location: data.location,
      currentTemperature: data.current.temp_c,
      currentCondition: data.forecast.forecastday[0],
      currentCondition: data.forecast.forecastday[0].day.condition,
      minTemp: data.forecast.forecastday[0].day.mintemp_c,
      maxTemp: data.forecast.forecastday[0].day.maxtemp_c,
      sunrise: data.forecast.forecastday[0].astro.sunrise,
      sunset: data.forecast.forecastday[0].astro.sunset,
      url: city
    }
    response.send({ details });
  })
  .catch(err => {
    response.send(err);
  });
}