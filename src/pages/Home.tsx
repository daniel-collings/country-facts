import { useState } from 'react'
import CountrySearchForm from '@/features/CountrySearchForm.tsx'
import { Link } from 'react-router-dom'

export type SearchRecordType = Record<string, unknown>[]

export default function Home() {
  const [results, setResults] = useState<SearchRecordType>()

  return (
    <div className="space-y-4">
      <h2>Country search</h2>
      <CountrySearchForm setResults={setResults} />

      {Array.isArray(results) && results.length > 0 && (
        <div className="block h-96 overflow-auto overflow-x-auto">
          <table className="table table-sm table-pin-rows">
            <thead>
              <tr>
                <td>Country</td>
                <td>Capital</td>
                <td>Flag</td>
                <td>Continent</td>
              </tr>
            </thead>
            <tbody>
              {results.map(({ name, capital, flag, continents }, i) => (
                <tr key={i} className="hover">
                  <td>
                    <Link to={`/countries/${encodeURIComponent(name.common)}`}>
                      {name.common}{' '}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/countries/${encodeURIComponent(name.common)}`}>
                      {capital.reduce(
                        (p, c, i) => p + (i > 0 ? `, ${c}` : c),
                        ''
                      )}
                    </Link>
                  </td>
                  <td className="text-center sm:text-left">
                    <Link to={`/countries/${encodeURIComponent(name.common)}`}>
                      {flag as string}{' '}
                    </Link>
                  </td>
                  <td className="text-wrap">
                    {continents.reduce(
                      (p, c, i) => p + (i > 0 ? `, ${c}` : c),
                      ''
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
