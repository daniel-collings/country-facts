import formatNumber from '@/utils/formatNumber.ts'

type CapitalPropsType = {
  capital: string | string[]
}
export default function Capital({ capital }: CapitalPropsType) {
  if (Array.isArray(capital)) {
    return (
      <div>
        <div>
          <p className="font-bold">Capital</p>
          <ul>
            {capital.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div>
        <p className="font-bold">Capital</p>
        <ul>
          <li>{capital}</li>
        </ul>
      </div>
    </div>
  )
}
