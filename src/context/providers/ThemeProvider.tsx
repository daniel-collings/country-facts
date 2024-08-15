import React, { ReactNode, useState } from 'react'
import { ThemeContext } from '@/context/ThemeContext.tsx'
import { ThemeEnum } from '@/types/enums.ts'

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.LIGHT)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
