import { describe, expect, test } from 'vitest'
import { render } from '@/utils/testUtils.tsx'
import BasicListInfo from '@/components/BasicListInfo.tsx'

describe('BasicListInfo Component', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <BasicListInfo items={['ESP', 'AND', 'DEU']} label="Borders" />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
