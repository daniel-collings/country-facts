import React from 'react'
import MainLayout from '@/layouts/MainLayout.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainLayout>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    </MainLayout>
  )
}

export default AllTheProviders
