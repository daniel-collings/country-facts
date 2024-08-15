import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import './global.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MainLayout from './layouts/MainLayout'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainLayout>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </MainLayout>
  </React.StrictMode>
)
