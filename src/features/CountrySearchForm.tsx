import { FormEvent } from 'react'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import InputWithActionButton from '../components/InputWithActionButton.tsx'

interface ICountrySearchForm {
  search: string
  setSearch: (value: ((prevState: string) => string) | string) => void
  setResults: (value: ((prevState: []) => []) | []) => void
}

export default function CountrySearchForm({
  search,
  setSearch,
  setResults
}: ICountrySearchForm) {
  const fetchCountryData = async (e: FormEvent) => {
    e.preventDefault()

    return await fetch(`https://restcountries.com/v3.1/name/${search}`)
      .then((res) => res.json())
      .then((data) => setResults(data))
  }

  return (
    <form
      onSubmit={fetchCountryData}
      className="grid grid-flow-row max-w-96 gap-4"
    >
      <InputWithActionButton
        required={true}
        minLength={3}
        placeholder="Search..."
        onChange={(event) => {
          setSearch(event.target.value)
        }}
        button={{
          label: 'Search',
          icon: <MagnifyingGlassCircleIcon className="h-8 w-8" />,
          theme: 'btn-primary'
        }}
      />
    </form>
  )
}
