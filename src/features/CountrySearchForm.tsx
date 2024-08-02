import { FormEvent } from 'react'

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
      <input
        type="text"
        required
        className="input input-bordered"
        placeholder="Search..."
        onChange={(event) => {
          setSearch(event.target.value)
        }}
      />
      <button className="btn btn-sm btn-primary" type="submit">
        Search
      </button>
    </form>
  )
}
