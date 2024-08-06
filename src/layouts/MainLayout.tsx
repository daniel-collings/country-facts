import { ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div data-theme="light" className="h-full bg-base-content p-8">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-base-200 rounded-xl p-8">
        {children}
      </main>
    </div>
  )
}
