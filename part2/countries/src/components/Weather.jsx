import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    setWeather(null)
    weatherService
      .getByCity(capital)
      .then((data) => setWeather(data))
      .catch(() => setWeather(null))
  }, [capital])

  if (!weather) {
    return null
  }

  const icon = weather.weather[0].icon

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <div>temperature {weather.main.temp} °C</div>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <div>wind {weather.wind.speed} m/s</div>
    </div>
  )
}

export default Weather
