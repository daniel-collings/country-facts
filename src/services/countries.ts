export const fetchCountries = async (
  inputValue: string
): Promise<Record<string, unknown>[]> =>
  await fetch(`https://restcountries.com/v3.1/name/${inputValue}`).then(
    (res) => {
      if (res.status >= 400) throw new Error('Something went wrong')
      return res.json()
    }
  )

export const fetchCountryByCode = async (
  inputValue: string
): Promise<Record<string, unknown>[]> =>
  await fetch(
    `https://restcountries.com/v3.1/alpha/${inputValue}?fields=name`
  ).then((res) => {
    if (res.status >= 400) throw new Error('Something went wrong')
    return res.json()
  })
