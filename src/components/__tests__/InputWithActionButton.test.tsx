import { describe, expect, test, vitest } from 'vitest'
import { render } from '@/utils/testUtils.tsx'
import InputWithActionButton from '@/components/InputWithActionButton.tsx'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'

describe('InputWithActionButton Component', () => {
  test('should render correctly', () => {
    const mockFn = vitest.fn()
    const { asFragment } = render(
      <InputWithActionButton
        value=""
        onChange={mockFn}
        required
        name="countrySearch"
        minLength={3}
        placeholder="Search..."
        button={{
          label: 'Search',
          icon: <MagnifyingGlassCircleIcon className="h-8 w-8" />,
          theme: 'btn-primary'
        }}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
