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
import MultiMatches from '@/pages/MultiMatches.tsx'

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
    },
    retry: 2,
    retryDelay: 2000
  })

  if (isLoading) return <LoadingSpinner />
  else if (isError) return <ErrorDisplay error={error} />

  const countryData = data?.length
    ? data.find((country) => country.name.common === countryId)
    : []
  if (
    Array.isArray(data) &&
    data.length > 1 &&
    countryData?.name.common !== countryId
  ) {
    return <MultiMatches data={data} />
  } else if (!data || !countryId) {
    return <div>Data is undefined</div>
  }
  return (
    <div className="space-y-4">
      <PageHeader
        title={countryId}
        subtitle={countryData?.altSpellings.reduce(
          (p, c, i) => p + (i > 0 ? `, ${c}` : c),
          ''
        )}
      />

      <div className="bg-base-200 rounded-xl p-8">
        <div className="flex flex-wrap justify-evenly gap-4">
          <label className="w-full grow">
            Select what information you want to see about {countryId}
          </label>
          {Object.keys(countryData)
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
          {countryData?.flags?.png && (
            <ImageCard
              png={countryData?.flags?.png}
              alt={`${data[0].name.common} flag`}
            />
          )}
          <div className="space-y-4">
            <BasicDataDisplay
              data={countryData?.capital as string | string[]}
              label="Capital"
            />
            {countryData?.population && (
              <PopulationCapacityFact
                population={countryData.population as number}
              />
            )}
            {countryData?.area && (
              <CountryAreaFact area={countryData.area as number} />
            )}
          </div>
          {countryData?.coatOfArms?.png && (
            <ImageCard
              png={countryData.coatOfArms.png}
              alt={`${countryData.name.common} coat of arms`}
            />
          )}
        </div>
      </CardFrame>

      {countryData !== undefined && (
        <DynamicDataView data={countryData} viewableFields={viewableFields} />
      )}
    </div>
  )
}
