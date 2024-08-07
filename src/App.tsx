import { RouterProvider } from 'react-router-dom'
import React from 'react'
import MainLayout from '@/layouts/MainLayout.tsx'
import router from '@/routes/router.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <MainLayout>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MainLayout>
  )
}

export default App
