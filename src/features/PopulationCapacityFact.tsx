import formatNumber from '@/utils/formatNumber.ts'
import crowdCapacityArray from '@/data/crowdCapacityArray.ts'

const randomCapacity =
  crowdCapacityArray[Math.floor(Math.random() * crowdCapacityArray.length)]

export default function PopulationCapacityFact({
  population
}: {
  population: number
}) {
  const venueFillCount = Math.round(population / randomCapacity.capacity)
  return (
    <div>
      <div>
        <p className="font-bold">Population</p>
        <p>{formatNumber(population)}</p>
        <p>
          That's equivalent to filling {randomCapacity.name}{' '}
          {formatNumber(venueFillCount)} time{venueFillCount !== 1 ? 's' : ''}
        </p>
      </div>
    </div>
  )
}
