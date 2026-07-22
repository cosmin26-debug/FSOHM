import axios from 'axios'

const apiKey = import.meta.env.VITE_WEATHER_KEY

const getByCity = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  return axios.get(url).then((response) => response.data)
}

export default { getByCity }
