export const fetchCountries = async (inputValue: string): Promise<void> =>
  await fetch(`https://restcountries.com/v3.1/name/${inputValue}`).then((res) =>
    res.json()
  )
