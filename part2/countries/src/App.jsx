import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    countryService.getAll().then((data) => setCountries(data))
  }, [])

  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      find countries{' '}
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <Countries countries={countriesToShow} />
    </div>
  )
}

export default App
