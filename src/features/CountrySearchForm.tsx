import { FormEvent, useState, useEffect } from 'react'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import InputWithActionButton from '@/components/InputWithActionButton.tsx'

interface ICountrySearchForm {
  searchValue: string
  onSubmit: (value: string) => void
}

export default function CountrySearchForm({
  searchValue,
  onSubmit
}: ICountrySearchForm) {
  const [inputValue, setInputValue] = useState(searchValue)

  useEffect(() => {
    setInputValue(searchValue)
  }, [searchValue])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() !== '') {
      onSubmit(inputValue)
    }
  }

  return (
    <form
      id="country-search-form"
      onSubmit={handleSubmit}
      className="grid grid-flow-row max-w-96 gap-4"
    >
      <InputWithActionButton
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
        name="countrySearch"
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
