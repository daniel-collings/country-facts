import { describe, expect, test } from 'vitest'
import { render } from '@/utils/testUtils.tsx'
import PageHeader from '@/components/PageHeader.tsx'

describe('PageHeader Component', () => {
  test('should render component correctly', () => {
    const { asFragment, getByText } = render(<PageHeader title="Hello World" />)
    expect(asFragment()).toMatchSnapshot()
    expect(getByText('Hello World')).toBeInTheDocument()
  })

  test('should render subtitle', () => {
    const { getByText, getByTestId } = render(
      <PageHeader title="Hello World" subtitle="Welcome to Country Facts" />
    )

    const subtitle = getByTestId('pageHeaderSubtitle')

    expect(subtitle).toBeInTheDocument()
    expect(getByText('Welcome to Country Facts')).toBeVisible()
  })
})
