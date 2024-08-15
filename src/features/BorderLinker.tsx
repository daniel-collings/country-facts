import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchCountryByCode } from '@/services/countries.ts'

const BorderLinker = ({ borders }: { borders: string[] }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const handleBorderClick = async (code: string) => {
    setIsLoading(true)
    try {
      const data = await fetchCountryByCode(code)
      console.log(data)
      if (data && data.name && data.name.common) {
        navigate(`/countries/${encodeURIComponent(data.name.common)}`)
      } else {
        console.error('Invalid data structure:', data)
      }
    } catch (error) {
      console.error('Error fetching country data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="p-4">
      <span className="font-bold">Borders</span>
      <ul className="list-disc text-start">
        {borders.map((item, index) => (
          <li
            key={index}
            onClick={() => !isLoading && handleBorderClick(item)}
            className={`cursor-pointer hover:underline text-primary ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {item}
          </li>
        ))}
      </ul>
      {isLoading && <p className="m-2">Loading...</p>}
    </div>
  )
}

export default BorderLinker
