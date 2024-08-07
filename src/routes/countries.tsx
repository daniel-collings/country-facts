import { IRoute } from '@/routes/types.ts'
import Home from '@/pages/Home.tsx'
import Countries from '@/pages/Countries.tsx'
import CountryDetail from '@/pages/CountryDetail.tsx'
import LayoutWithNav from '@/layouts/LayoutWithNav.tsx'

const countries: IRoute[] = [
  {
    label: 'Home',
    path: '/',
    element: (
      <LayoutWithNav>
        <Home />
      </LayoutWithNav>
    )
  },
  {
    label: 'Countries',
    path: '/countries',
    element: (
      <LayoutWithNav>
        <Countries />
      </LayoutWithNav>
    )
  },
  {
    path: '/countries/:countryId',
    element: (
      <LayoutWithNav>
        <CountryDetail />
      </LayoutWithNav>
    )
  }
]

export default countries
