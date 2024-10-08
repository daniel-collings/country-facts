import { useEffect, useState } from 'react'
import CountrySearchForm from '@/features/CountrySearchForm.tsx'
import { Link, useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchCountries } from '@/services/countries.ts'
import PageHeader from '@/components/PageHeader.tsx'
import ErrorDisplay from '@/components/ErrorDisplay.tsx'
import LoadingSpinner from '@/components/LoadingSpinner.tsx'

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [searchValue, setSearchValue] = useState<string>(
    searchParams.get('searchQuery') || ''
  )

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['countries', searchValue],
    queryFn: () => fetchCountries(searchValue),
    enabled: searchValue.trim() !== '',
    retry: 2,
    retryDelay: 2000
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

  if (isLoading) return <LoadingSpinner />
  else if (isError) return <ErrorDisplay error={error} />

  return (
    <div>
      <PageHeader
        title="Country Facts"
        subtitle="Your friendly web based Geo Explorer 🌍"
      />
      <div className="space-y-4 bg-base-200 rounded-xl p-8">
        <p>
          Search for a specific country below or browse{' '}
          <Link to="/countries" className="underline text-primary">
            all countries
          </Link>{' '}
          with smart filtering on country common name, official name, continent
          and even by emoji flags! 🇳🇵 .
        </p>
        <CountrySearchForm searchValue={searchValue} onSubmit={handleSearch} />

        {Array.isArray(data) && data.length > 0 && (
          <div className="block h-96 overflow-auto border-b border-base-content">
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
                  <tr key={i}>
                    <td>
                      <Link
                        className="hover:text-primary hover:underline"
                        to={`/countries/${encodeURIComponent(name.common)}`}
                      >
                        {name.common}{' '}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/countries/${encodeURIComponent(name.common)}`}
                      >
                        {capital?.reduce(
                          (p, c, i) => p + (i > 0 ? `, ${c}` : c),
                          ''
                        )}
                      </Link>
                    </td>
                    <td className="text-center sm:text-left">
                      <Link
                        to={`/countries/${encodeURIComponent(name.common)}`}
                      >
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
    </div>
  )
}
