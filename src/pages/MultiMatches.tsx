import CardFrame from '@/components/CardFrame.tsx'
import PageHeader from '@/components/PageHeader.tsx'

interface IMultiMatchesProps {
  data: Record<string, unknown>
}

export default function MultiMatches({ data }: IMultiMatchesProps) {
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
}
