import { createHashRouter } from 'react-router-dom'
import countries from '@/routes/countries.tsx'

const router = createHashRouter([...countries])

export default router
