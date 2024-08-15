import { describe, expect, test } from 'vitest'
import { render } from '@/utils/testUtils.tsx'
import MainLayout from '@/layouts/MainLayout.tsx'

describe('MainLayout Component', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <MainLayout>
        <h1>Hello World</h1>
      </MainLayout>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
