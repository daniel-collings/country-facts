import React from 'react'

interface IBasicListInfoProps {
  label: string
  items: string[]
}

export default function BasicListInfo({ label, items }: IBasicListInfoProps) {
  return (
    <div className="p-4 grid">
      <span className="font-bold">{label}</span>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
