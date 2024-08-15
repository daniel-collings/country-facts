import React from 'react'

export default function GoogleMapLink({ link }: { link: string }) {
  return (
    <a href={link} target="_blank">
      View on GoogleMaps
    </a>
  )
}
