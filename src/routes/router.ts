import { createBrowserRouter } from 'react-router-dom'
import countries from '@/routes/countries.tsx'

const router = createBrowserRouter([...countries])

export default router
