import Weather from './Weather'

const Country = ({ country }) => {
  const languages = Object.values(country.languages || {})

  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>capital {country.capital?.[0]}</div>
      <div>area {country.area}</div>
      <h3>languages</h3>
      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt || country.name.common} width={150} />
      {country.capital?.[0] && <Weather capital={country.capital[0]} />}
    </div>
  )
}

export default Country
