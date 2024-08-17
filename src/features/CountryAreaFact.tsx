import formatNumber from '@/utils/formatNumber.ts'
import areaObjects from '@/data/areaObjectsArray.ts'

const randomAreaForComparison =
  areaObjects[Math.floor(Math.random() * areaObjects.length)]

export default function CountryAreaFact({ area }: { area: number }) {
  const areaInSquareMeters = area * 1000000

  const areaCovered = Math.round(
    areaInSquareMeters / randomAreaForComparison.areaInSquareMeters
  )
  return (
    <div className="grid p-4">
      <p className="font-bold">Area (sq. meters)</p>
      <p>{formatNumber(area)}</p>
      <p>
        That would take approx {formatNumber(areaCovered)}{' '}
        {randomAreaForComparison.name} to cover the country.
      </p>
    </div>
  )
}
