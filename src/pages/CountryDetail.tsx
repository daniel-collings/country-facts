import { useParams } from 'react-router-dom'

export default function CountryDetail() {
  const { countryId } = useParams()
  return <>Country Details: {countryId}</>
}
