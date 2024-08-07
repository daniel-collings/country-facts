import { useEffect, useState } from 'react'
import CountrySearchForm from '@/features/CountrySearchForm.tsx'
import { Link, useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchCountries } from '@/services/countries.ts'

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [searchValue, setSearchValue] = useState<string>(
    searchParams.get('searchQuery') || ''
  )

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['countries', searchValue],
    queryFn: () => fetchCountries(searchValue),
    enabled: searchValue.trim() !== ''
  })

  useEffect(() => {
    const currentQuery = searchParams.get('searchQuery')
    if (currentQuery !== searchValue) {
      setSearchValue(currentQuery || '')
    }
  }, [searchParams, searchValue])

  const handleSearch = (value: string) => {
    setSearchParams({ searchQuery: value })
  }

  return (
    <div className="space-y-4 bg-base-200 rounded-xl p-8">
      <h2>Country search</h2>
      <p>
        Search for a specific country believe or browse{' '}
        <Link to="/countries" className="underline text-primary">
          all countries
        </Link>{' '}
        with smart filtering on country common name, official name, continent
        and even by emoji flags! 🇳🇵 .
      </p>
      <CountrySearchForm searchValue={searchValue} onSubmit={handleSearch} />

      {isLoading && <div className="loading-bars loading-lg" />}
      {isError && <p>{(error as Error).message}</p>}

      {Array.isArray(data) && data.length > 0 && (
        <div className="block h-96 overflow-x-auto">
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
              {data.map(({ name, capital, flag, continents }, i) => (
                <tr key={i} className="hover">
                  <td>
                    <Link to={`/countries/${encodeURIComponent(name.common)}`}>
                      {name.common}{' '}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/countries/${encodeURIComponent(name.common)}`}>
                      {capital?.reduce(
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
