import { useState } from 'react'
import Country from './Country'

const Countries = ({ countries }) => {
  const [shown, setShown] = useState(null)

  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }

  if (countries.length === 1) {
    return <Country country={countries[0]} />
  }

  if (shown) {
    const country = countries.find((c) => c.cca3 === shown)
    return <Country country={country} />
  }

  return (
    <div>
      {countries.map((country) => (
        <div key={country.cca3}>
          {country.name.common}
          <button onClick={() => setShown(country.cca3)}>show</button>
        </div>
      ))}
    </div>
  )
}

export default Countries
