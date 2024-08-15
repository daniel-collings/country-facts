import { createHashRouter } from 'react-router-dom'
import countries from '@/routes/countries.tsx'
import generic from '@/routes/generic.tsx'

const router = createHashRouter([...generic, ...countries])

export default router
