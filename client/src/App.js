import './App.css'
import {useEffect, useState} from 'react'

import {fetchCitySuggestion, fetchWeatherDetail} from './apis/internal'
import {
  SearchBox,
  SelectedItemList,
  WeatherTable,
  WeatherIllustration,
} from './components'

function App() {
  const [newCity, setNewCity] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [currentCity, setCurrentCity] = useState([])
  const [selectedCities, setSelectedCities] = useState([])
  const [weatherDetails, setWeatherDetails] = useState({})

  const handleInputChange = e => setNewCity(e.target.value)

  const updateSuggestions = async city => {
    const data = await fetchCitySuggestion(city)
    setSuggestions(data)
  }

  const handleSelectedCity = async details => {
    setNewCity('')
    setCurrentCity(details.name)
    setSuggestions([])
    if (selectedCities.length === 0) setCurrentCity(details.name)
    setSelectedCities(prev => [...prev, {...details}])
    const data = await fetchWeatherDetail(details.lat, details.lon)
    setWeatherDetails(prev => ({...prev, [details.name]: data}))
  }

  useEffect(() => {
    if (newCity.length === 0) setSuggestions([])
    const delayDebounceFn = setTimeout(() => {
      if (newCity.length) updateSuggestions(newCity)
    }, 200)
    return () => clearTimeout(delayDebounceFn)
  }, [newCity])

  return (
    <div className='container'>
      <h1 className='header'>Weather Forecast</h1>

      <SearchBox
        value={newCity}
        suggestions={suggestions}
        onChange={handleInputChange}
        onSuggestionClick={handleSelectedCity}
      />

      <div className='weatherDetailBox'>
        <SelectedItemList
          active={currentCity}
          data={selectedCities}
          onClick={setCurrentCity}
        />
        <WeatherTable data={weatherDetails} city={currentCity} />
      </div>

      <WeatherIllustration display={selectedCities.length === 0} />
    </div>
  )
}

export default App
