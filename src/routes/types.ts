import { ReactNode } from 'react'

export interface IRoute {
  label?: string
  path: string
  element: ReactNode
}
