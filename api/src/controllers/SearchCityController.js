const fetch = require('node-fetch');
const { baseUrl, headers } = require('../services.js');

module.exports = function (request, response) {
  const { city } = request.params

  fetch( `${baseUrl}search.json?q=${city}`, {
    method: 'GET',
    headers
  })
  .then(response => response.json())
  .then(data => {
    response.send({ data });
  })
  .catch(err => {
    response.send(err);
  });
  
}