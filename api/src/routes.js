const { Router } = require('express')
var cors = require('cors')

const logger = require('./logger.js');
const SearchCityController = require('./controllers/SearchCityController');
const CityMainController = require('./controllers/CityMainController');
const CityWeatherController = require('./controllers/CityWeatherController');

const routes = new Router()

// Allow requests from origin
routes.use(cors({ origin: 'http://localhost:3000' }))

// Log all requests to file
routes.use(logger)

// Search City with Autocomplete
routes.get('/search/:city', SearchCityController)
// Get the main details for each city
routes.get('/main/:city', CityMainController)
// Get full details one city
routes.get('/weather/:city', CityWeatherController)

module.exports = routes
