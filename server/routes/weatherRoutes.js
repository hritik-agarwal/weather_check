const fetch = require('node-fetch')
const express = require('express')
const router = express.Router()

const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY

const getLocationAPI = (location, limit) =>
  `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${limit}&appid=${OPEN_WEATHER_API_KEY}`
const getWeatherAPI = (lat, lon, days) =>
  `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=metric&appid=${OPEN_WEATHER_API_KEY}`

router.get('/weather', async (req, res, next) => {
  fetch(getWeatherAPI(req.query.lat, req.query.lon, 14))
    .then(result => result.json())
    .then(data => res.json(data.daily))
    .catch(error => next(error))
})

router.get('/suggestion', async (req, res) => {
  fetch(getLocationAPI(req.query.city, 5))
    .then(result => result.json())
    .then(data => res.json(data))
    .catch(error => next(error))
})

module.exports = router
