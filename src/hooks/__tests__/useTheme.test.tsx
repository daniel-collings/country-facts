import { useTheme } from '@/hooks/useTheme.tsx'
import { describe, expect, test } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { ThemeEnum } from '@/types/enums.ts'
import { ThemeProvider } from '@/context/providers/ThemeProvider.tsx'

const wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>

describe('useTheme', () => {
  test('should initialise with default LIGHT theme', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => wrapper({ children })
    })
    expect(result.current.theme).equals(ThemeEnum.LIGHT)
  })

  test('should switch from light to coffee theme', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => wrapper({ children })
    })

    act(() => {
      result.current.setTheme(ThemeEnum.COFFEE)
    })

    expect(result.current.theme).equals(ThemeEnum.COFFEE)
  })
})
