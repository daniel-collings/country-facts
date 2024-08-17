import React from 'react'
import CardFrame from '@/components/CardFrame.tsx'
import BorderLinker from '@/features/BorderLinker.tsx'
import BasicObjectInfo from '@/components/BasicObjectInfo.tsx'
import GoogleMapLink from '@/components/GoogleMapsLink.tsx'
import BasicDataDisplay from '@/components/BasicDataDisplay.tsx'

interface IDynamicDataViewProps {
  data: Record<string, unknown>
  viewableFields: Record<string, unknown>
}
export default function DynamicDataView({
  data,
  viewableFields
}: IDynamicDataViewProps) {
  const renderComponent = (key, value) => {
    switch (key) {
      case 'maps':
        return <GoogleMapLink link={value.googleMaps} />
      case 'currencies':
      case 'languages':
      case 'translations':
        return <BasicObjectInfo label={key} obj={value} />
      case 'tld':
      case 'altSpellings':
      case 'timezones':
      case 'continents':
        return <BasicDataDisplay label={key} data={value} />
      case 'borders':
        return <BorderLinker borders={value} />

      default:
        return <BasicDataDisplay label={key} data={JSON.stringify(value)} />
    }
  }

  return (
    <div className="flex flex-wrap gap-4">
      {Object.keys(viewableFields)
        .filter((key) => viewableFields[key] && data[key] !== undefined)
        .map((field) => (
          <CardFrame key={field}>
            {renderComponent(field, data[field])}
          </CardFrame>
        ))}
    </div>
  )
}
