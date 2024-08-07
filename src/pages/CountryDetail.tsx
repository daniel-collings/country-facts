import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchCountries } from '@/services/countries.ts'
import { useState } from 'react'
import PageHeader from '@/components/PageHeader.tsx'

export default function CountryDetail() {
  const { countryId } = useParams()
  const [viewableFields, setViewableFields] = useState<Record<string, true>[]>(
    []
  )

  const { data, isLoading } = useQuery({
    queryKey: ['countryId', countryId],
    queryFn: (): Promise<Record<string, unknown>[]> => {
      if (countryId) return fetchCountries(countryId)
    }
  })

  if (isLoading) return <div className="loading-bars loading-lg"></div>

  if (Array.isArray(data) && data.length > 1) {
    return <div>{JSON.stringify(data)}</div>
  } else if (!data || !countryId) {
    return <div>Data is undefined</div>
  }

  return (
    <div className="space-y-4">
      <PageHeader
        title={countryId}
        subtitle={data[0].altSpellings.reduce(
          (p, c, i) => p + (i > 0 ? `, ${c}` : c),
          ''
        )}
      />

      <div className="bg-base-200 rounded-xl p-8">
        <div className="flex flex-wrap justify-evenly gap-4">
          <label className="w-full grow">
            Select what information you want to see about {countryId}
          </label>
          {Object.keys(data[0]).map((field) => (
            <label
              key={field}
              htmlFor={field}
              className="flex justify-start gap-2"
            >
              <input
                type="checkbox"
                onChange={(e) =>
                  setViewableFields((prev) => ({
                    ...prev,
                    [field]: e.target.checked
                  }))
                }
              />{' '}
              {field}
            </label>
          ))}
        </div>
      </div>

      {Object.keys(viewableFields).length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {Object.keys(viewableFields)
            .filter((key) => viewableFields[key])
            .map((field, i) => {
              console.log(data[0][field])
              if (typeof data[0][field] === 'string') {
                return (
                  <div key={i} className="bg-base-200 rounded-xl p-8">
                    <div className="flex flex-col flex-wrap items-center text-center gap-4">
                      <b>{field}</b>
                      {data?.[0][field]}
                    </div>
                  </div>
                )
              } else if (Array.isArray(data[0][field])) {
                return (
                  <div key={i} className="bg-base-200 rounded-xl p-8">
                    <div className="flex flex-col flex-wrap gap-4">
                      {data?.[0][field].map((info, i) => (
                        <div key={i} className="bg-base-300 rounded-xl p-8">
                          {info}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }
              return (
                <div key={i} className="bg-base-200 rounded-xl p-8">
                  <div className="flex flex-col flex-wrap gap-4">
                    {JSON.stringify(data?.[0][field])}
                  </div>
                </div>
              )
            })}
        </div>
      ) : null}
    </div>
  )
}
