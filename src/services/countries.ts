import api from '@/services/api.ts'

export const fetchCountries = async (
  inputValue: string
): Promise<Record<string, unknown>[]> =>
  await api(`/v3.1/name/${inputValue}`).then((res) => {
    if (res.status >= 400) throw new Error('Something went wrong')
    return res.data
  })

export const fetchCountryByCode = async (
  inputValue: string
): Promise<Record<string, unknown>[]> =>
  await api(`/v3.1/alpha/${inputValue}?fields=name`).then((res) => {
    if (res.status >= 400) throw new Error('Something went wrong')
    return res.data
  })
