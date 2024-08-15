import { createContext } from 'react'
import { ThemeEnum } from '@/types/enums.ts'

interface IThemeContextProps {
  theme: ThemeEnum
  setTheme: (theme: ThemeEnum) => void
}

export const ThemeContext = createContext<IThemeContextProps | undefined>(
  undefined
)
