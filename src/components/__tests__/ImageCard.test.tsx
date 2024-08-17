import { describe, expect, test } from 'vitest'
import { render } from '@/utils/testUtils.tsx'
import ImageCard from '@/components/ImageCard.tsx'

describe('ImageCard Component', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<ImageCard src={'/vite.svg'} alt="vite" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
