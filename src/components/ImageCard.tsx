import React from 'react'

interface IImageCardProps {
  src: string
  alt: string
}

export default function ImageCard({ src, alt }: IImageCardProps) {
  return (
    <div className="bg-base-300 rounded-xl p-4">
      <img src={src} alt={alt} className="w-32 h-auto" />
    </div>
  )
}
