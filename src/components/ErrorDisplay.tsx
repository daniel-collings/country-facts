import { ExclamationCircleIcon } from '@heroicons/react/24/solid'

export default function ErrorDisplay({ error }: { error: unknown }) {
  console.error(error)
  return (
    <div role="alert" className="alert alert-error">
      <ExclamationCircleIcon className="h-8 w-8" />
      <span>
        Oops! Something has went wrong. Please try again and if the problem
        persists then please report.
      </span>
    </div>
  )
}
