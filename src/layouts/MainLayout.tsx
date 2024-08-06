import { ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div data-theme="light" className="h-screen bg-base-content p-4 sm:p-8">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-base-200 rounded-xl p-8">
        {children}
      </main>
    </div>
  )
}
