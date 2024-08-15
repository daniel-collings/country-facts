import React from 'react'

interface IBasicListInfoProps {
  label: string
  items: string[]
}

export default function BasicListInfo({ label, items }: IBasicListInfoProps) {
  ;<div className="p-4">
    <span className="font-bold">{label}</span>
    <ul className="list-disc text-start">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
}
