import { describe, expect, test } from 'vitest'
import { render } from '@/utils/testUtils.tsx'
import BasicObjectInfo from '@/components/BasicObjectInfo.tsx'

describe('BasicListInfo Component', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <BasicObjectInfo
        obj={{ label: 'United Kingdom', ranking: 7 }}
        label="Basic Info"
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
