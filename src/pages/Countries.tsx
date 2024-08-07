import countriesData from '@/data/countries.json'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Countries() {
  const [searchCountryList, setSearchCountryList] = useState<string>()

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered"
        onChange={(e) => {
          setSearchCountryList(e.target.value)
        }}
      />
      <div className="block h-96 overflow-auto overflow-x-auto">
        <table className="table table-sm table-pin-rows">
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
                  f.name.official
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
                <tr key={i} className="hover">
                  <td>
                    <Link
                      to={`/countries/${encodeURIComponent(country.name.common)}`}
                    >
                      {country.name.common}{' '}
                    </Link>
                  </td>
                  <td className="text-center sm:text-left">
                    <Link
                      to={`/countries/${encodeURIComponent(country.name.common)}`}
                    >
                      {country.flag}{' '}
                    </Link>
                  </td>
                  <td className="text-wrap">
                    {country.continents.reduce(
                      (p, c, i) => p + (i > 0 ? `, ${c}` : c),
                      ''
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
