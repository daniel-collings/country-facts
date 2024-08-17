import { ThemeContext } from '@/context/ThemeContext.tsx'
import { useContext } from 'react'

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  if (theme === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return { theme, setTheme }
}
