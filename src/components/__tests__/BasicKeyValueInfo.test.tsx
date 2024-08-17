import { describe, expect, test } from 'vitest'
import { render } from '@/utils/testUtils.tsx'
import BasicKeyValueInfo from '@/components/BasicKeyValueInfo.tsx'

describe('BasicKeyValueInfo Component', () => {
  test('should render correctly with string value', () => {
    const { asFragment } = render(
      <BasicKeyValueInfo value="£ (Great British Pound)" label="Currency" />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
