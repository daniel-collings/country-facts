import { useState } from 'react'
import CountrySearchInput from '../features/CountrySearchForm.tsx'

export default function Home() {
  const [results, setResults] = useState<[]>([])
  const [search, setSearch] = useState('')

  return (
    <div>
      <h2>Country search</h2>
      <CountrySearchInput
        search={search}
        setSearch={setSearch}
        setResults={setResults}
      />

      <div>
        {results.map(
          (x: {
            name: { official: string }
            flag: string
            capital: string
          }) => {
            return (
              <div>
                {x.flag} {x.name.official}
                <br />
                Capital: {x.capital}
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}
