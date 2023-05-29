import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_INTERNAL_API_PATH,
})

const fetchWeatherData = cities => {}

export const fetchCitySuggestion = async city => {
  let response
  try {
    response = await api.get(`/api/suggestion?city=${city}`)
  } catch (error) {
    return error
  }
  return response.data
}

export const fetchWeatherDetail = async (lat, lon) => {
  let response
  try {
    response = await api.get(`/api/weather?lat=${lat}&lon=${lon}`)
  } catch (error) {
    return error
  }
  return response.data
}
