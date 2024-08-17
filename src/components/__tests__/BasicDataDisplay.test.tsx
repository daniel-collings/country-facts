import { describe, expect, test } from 'vitest'
import { render } from '@/utils/testUtils.tsx'
import BasicDataDisplay from '@/components/BasicDataDisplay.tsx'

describe('BasicDataDisplay Component', () => {
  test('should render correctly with string value', () => {
    const { asFragment } = render(
      <BasicDataDisplay data="£ (Great British Pound)" label="Currency" />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('should render correctly with string array value', () => {
    const { asFragment } = render(
      <BasicDataDisplay
        data={['Cape Town', 'Pretoria', 'Bloemfontein']}
        label="Capital"
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
