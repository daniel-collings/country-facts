import { describe, expect, test } from 'vitest'
import { render } from '@/utils/testUtils.tsx'
import PageHeader from '@/components/PageHeader.tsx'

describe('PageHeader Component', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<PageHeader title="Hello World" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
