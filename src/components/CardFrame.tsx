import { ReactNode } from 'react'

export default function CardFrame({
  children,
  key
}: {
  children: ReactNode
  key?: string
}) {
  return (
    <div key={key} className="bg-base-200 rounded-xl p-8">
      <div className="flex flex-col flex-wrap items-center text-center gap-4">
        {children}
      </div>
    </div>
  )
}
