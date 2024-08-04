import { RouterProvider } from 'react-router-dom'
import React from 'react'
import MainLayout from '@/layouts/MainLayout.tsx'
import router from '@/routes/router.ts'

function App() {
  return (
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  )
}

export default App
