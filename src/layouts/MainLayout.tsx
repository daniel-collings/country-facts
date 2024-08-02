import { ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
  )
}
