import { describe, expect, test } from 'vitest'
import { render } from '@/utils/testUtils.tsx'
import CardFrame from '@/components/CardFrame.tsx'

describe('CardFrame Component', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <CardFrame>
        <h1>Hello World</h1>
      </CardFrame>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
