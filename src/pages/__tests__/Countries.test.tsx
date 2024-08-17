import { describe, expect, test } from 'vitest'
import { render } from '@/utils/testUtils.tsx'
import Countries from '@/pages/Countries.tsx'

describe('Countries Page', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<Countries />)
    expect(asFragment()).toMatchSnapshot()
  })
})
