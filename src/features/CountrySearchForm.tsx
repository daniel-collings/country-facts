import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import InputWithActionButton from '@/components/InputWithActionButton.tsx'
import { fetchCountries } from '@/services/countries.ts'
import { SearchRecordType } from '@/pages/Home.tsx'

interface ICountrySearchForm {
  setResults: Dispatch<SetStateAction<SearchRecordType | undefined>>
}

export default function CountrySearchForm({ setResults }: ICountrySearchForm) {
  const [searchValue, setSearchValue] = useState<string>()

  const fetchCountryData = async (e: FormEvent) => {
    e.preventDefault()

    if (!searchValue || searchValue.trim() === '') {
      throw new Error('search is undefined')
    }

    return await fetchCountries(searchValue).then((data) => {
      setResults(data)
    })
  }

  return (
    <form
      onSubmit={fetchCountryData}
      className="grid grid-flow-row max-w-96 gap-4"
    >
      <InputWithActionButton
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value as string)
        }}
        required={true}
        minLength={3}
        placeholder="Search..."
        button={{
          label: 'Search',
          icon: <MagnifyingGlassCircleIcon className="h-8 w-8" />,
          theme: 'btn-primary'
        }}
      />
    </form>
  )
}
