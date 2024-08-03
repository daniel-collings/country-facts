import './global.css'
import MainLayout from './layouts/MainLayout.tsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.ts'
import React from 'react'

function App() {
  return (
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  )
}

export default App
