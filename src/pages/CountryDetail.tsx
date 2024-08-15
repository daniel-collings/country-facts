import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchCountries } from '@/services/countries.ts'
import { useState } from 'react'
import PageHeader from '@/components/PageHeader.tsx'
import CardFrame from '@/components/CardFrame.tsx'
import DynamicDataView from '@/features/DynamicDataView.tsx'
import PopulationCapacityFact from '@/features/PopulationCapacityFact.tsx'
import CountryAreaFact from '@/features/CountryAreaFact.tsx'
import BasicDataDisplay from '@/components/BasicDataDisplay.tsx'
import ImageCard from '@/components/ImageCard.tsx'
import ErrorDisplay from '@/components/ErrorDisplay.tsx'
import LoadingSpinner from '@/components/LoadingSpinner.tsx'

const excludeDetailsList = [
  'name',
  'coatOfArms',
  'population',
  'area',
  'flags',
  'flag'
]
export default function CountryDetail() {
  const { countryId } = useParams()
  const [viewableFields, setViewableFields] = useState<Record<string, true>[]>(
    []
  )

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['countryId', countryId],
    queryFn: async (): Promise<Record<string, unknown>[] | null> => {
      if (countryId) return await fetchCountries(countryId)
      return null
    }
  })

  if (!isLoading) return <LoadingSpinner />
  else if (isError) return <ErrorDisplay error={error} />

  if (
    Array.isArray(data) &&
    data.length > 1 &&
    countryId !== data[0].name.common
  ) {
    return (
      <div>
        <CardFrame>
          <div className="space-y-4">
            <PageHeader title="Multiple Matches" />
            <p>Did you mean?</p>
            <ul>
              {data.map((country, index) => (
                <li key={index} className="hover:underline text-primary">
                  <a
                    href={`#/countries/${encodeURIComponent(country.name.common)}`}
                  >
                    {country.name.common}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </CardFrame>
      </div>
    )
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
          {Object.keys(data[0])
            .filter((f) => !excludeDetailsList.includes(f))
            .map((field) => (
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

      <CardFrame>
        <div className="flex flex-wrap items-center justify-evenly gap-4">
          <ImageCard
            png={data[0].flags.png}
            alt={`${data[0].name.common} flag`}
          />
          <div className="space-y-4">
            <BasicDataDisplay
              data={data[0].capital as string | string[]}
              label="Capital"
            />
            {data[0].population && (
              <PopulationCapacityFact
                population={data[0].population as number}
              />
            )}
            {data[0].area && <CountryAreaFact area={data[0].area as number} />}
          </div>
          <ImageCard
            png={data[0].coatOfArms.png}
            alt={`${data[0].name.common} coat of arms`}
          />
        </div>
      </CardFrame>

      <DynamicDataView data={data[0]} viewableFields={viewableFields} />
    </div>
  )
}
