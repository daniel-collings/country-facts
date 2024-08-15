import { describe, expect, test } from 'vitest'
import { render } from '@/utils/testUtils.tsx'
import LayoutWithNav from '@/layouts/LayoutWithNav.tsx'

describe('LayoutWithNav Component', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <LayoutWithNav>
        <h1>Hello World</h1>
      </LayoutWithNav>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
