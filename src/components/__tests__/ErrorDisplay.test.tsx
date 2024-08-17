import { describe, expect, test } from 'vitest'
import { render } from '@/utils/testUtils.tsx'
import ErrorDisplay from '@/components/ErrorDisplay.tsx'

describe('ErrorDisplay Component', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <ErrorDisplay error={'Something went wrong'} />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
