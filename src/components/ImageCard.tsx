import React from 'react'

interface IImageCardProps {
  png: string
  alt: string
}

export default function ImageCard({ png, alt }: IImageCardProps) {
  return (
    <div className="bg-base-300 rounded-xl p-4">
      <img src={png} alt={alt} className="w-32 h-auto" />
    </div>
  )
}
