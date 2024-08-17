import React from 'react'
interface IBasicKeyValueInfoProps {
  label: string
  value: string | number
}

export default function BasicKeyValueInfo({
  label,
  value
}: IBasicKeyValueInfoProps) {
  return (
    <div className="p-4 grid">
      <span className="font-bold">{label}</span>
      <span>{value}</span>
    </div>
  )
}
