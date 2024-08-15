import { describe, expect, test } from 'vitest'
import Home from '@/pages/Home.tsx'
import { render } from '@/utils/testUtils.tsx'

describe('Home Component', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchSnapshot()
  })
})
