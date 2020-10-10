const fetch = require('node-fetch');
const { baseUrl, headers } = require('../services.js');

module.exports = function(request, response) {
  const { city } = request.params

  fetch( `${baseUrl}forecast.json?days=9&q=${city}`, {
    method: 'GET',
    headers
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    response.send({ data });
  })
  .catch(err => {
    response.send(err);
  });
}