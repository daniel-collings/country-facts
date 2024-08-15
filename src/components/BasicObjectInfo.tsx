import React from 'react'

interface IBasicObjectInfoProps {
  label: string
  obj: Record<string, unknown>[]
}

export default function BasicObjectInfo({ label, obj }: IBasicObjectInfoProps) {
  return (
    <div className="p-4">
      <span className="font-bold">{label}</span>
      <ul className="list-disc text-start">
        {Object.entries(obj).map(([key, value]) => (
          <li key={key}>
            {key}: {typeof value === 'object' ? JSON.stringify(value) : value}
          </li>
        ))}
      </ul>
    </div>
  )
}
