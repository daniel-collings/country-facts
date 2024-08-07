import { ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div
      data-theme="dark"
      className="h-full min-h-screen bg-base-100 p-4 sm:p-8"
    >
      <main className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">{children}</main>
    </div>
  )
}
