import { FormEvent } from 'react'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'

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
      <label className="input input-sm input-bordered flex justify-between items-center pr-0">
        <input
          type="text"
          required
          minLength={3}
          placeholder="Search..."
          onChange={(event) => {
            setSearch(event.target.value)
          }}
        />
        <button className="btn btn-sm btn-primary h-full w-auto" type="submit">
          Search
          <MagnifyingGlassCircleIcon className="h-8 w-8" />
        </button>
      </label>
    </form>
  )
}
