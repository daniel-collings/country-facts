export const fetchCountries = async (
  inputValue: string
): Promise<Record<string, unknown>[]> =>
  await fetch(`https://restcountries.com/v3.1/name/${inputValue}`).then((res) =>
    res.json()
  )

export const fetchCountryByCode = async (
  inputValue: string
): Promise<Record<string, unknown>[]> =>
  await fetch(
    `https://restcountries.com/v3.1/alpha/${inputValue}?fields=name`
  ).then((res) => res.json())
