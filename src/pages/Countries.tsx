import countriesData from '@/data/countries.json'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Countries() {
  const [searchCountryList, setSearchCountryList] = useState<string>()

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered"
        onChange={(e) => {
          setSearchCountryList(e.target.value)
        }}
      />
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Country</td>
            <td>Flag</td>
            <td>Continent</td>
          </tr>
        </thead>
        <tbody>
          {countriesData
            .filter(
              (f) =>
                f.name.common
                  .toLowerCase()
                  .includes(searchCountryList?.toLowerCase()) ||
                !searchCountryList ||
                f.flag === searchCountryList ||
                f.continents.some((continent) =>
                  continent
                    .toLowerCase()
                    .includes(searchCountryList?.toLowerCase())
                )
            )
            .map((country, i) => (
              <tr key={i}>
                <td>
                  <Link
                    to={`/countries/${encodeURIComponent(country.name.common)}`}
                  >
                    {country.name.common}{' '}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/countries/${encodeURIComponent(country.name.common)}`}
                  >
                    {country.flag}{' '}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/countries/${encodeURIComponent(country.name.common)}`}
                  >
                    {country.continents.map((continent, i) => (
                      <td key={`${country.area}_${i}`}>{continent}</td>
                    ))}
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
