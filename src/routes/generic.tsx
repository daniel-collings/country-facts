import { IRoute } from '@/routes/types.ts'
import Home from '@/pages/Home.tsx'
import LayoutWithNav from '@/layouts/LayoutWithNav.tsx'
import NotFound from '@/pages/NotFound.tsx'

const generic: IRoute[] = [
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
    path: '*',
    element: (
      <LayoutWithNav>
        <NotFound />
      </LayoutWithNav>
    )
  }
]

export default generic
