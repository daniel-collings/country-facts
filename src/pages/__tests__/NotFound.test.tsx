import { describe, expect, test } from 'vitest'
import { render } from '@/utils/testUtils.tsx'
import NotFound from '@/pages/NotFound.tsx'

describe('NotFound Page', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<NotFound />)
    expect(asFragment()).toMatchSnapshot()
  })
})
