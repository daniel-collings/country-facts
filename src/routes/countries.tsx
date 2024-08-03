import Home from '../pages/Home.tsx'
import Countries from '../pages/Countries.tsx'
import CountryDetail from '../pages/CountryDetail.tsx'
import { IRoute } from './types.ts'

const countries: IRoute[] = [
  {
    label: 'Home',
    path: '/',
    element: <Home />
  },
  {
    label: 'Countries',
    path: '/countries',
    element: <Countries />
  },
  {
    path: '/countries/:countryId',
    element: <CountryDetail />
  }
]

export default countries
