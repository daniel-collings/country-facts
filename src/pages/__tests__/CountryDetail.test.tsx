import { describe, expect, test } from 'vitest'
import { render } from '@/utils/testUtils.tsx'
import CountryDetail from '@/pages/CountryDetail.tsx'

describe('CountryDetails Page', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<CountryDetail />)
    expect(asFragment()).toMatchSnapshot()
  })
})
