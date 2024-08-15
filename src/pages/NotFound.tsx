import { NoSymbolIcon } from '@heroicons/react/24/solid'

export default function NotFound() {
  return (
    <div className="alert alert-info">
      <NoSymbolIcon className="h-8 w-8" />
      <span>This is not the page you're looking for.</span>
    </div>
  )
}
