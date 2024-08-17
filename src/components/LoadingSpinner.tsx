export default function LoadingSpinner() {
  return (
    <div
      className="flex w-full items-center h-96"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="loading loading-spinner loading-lg text-primary mx-auto h-full" />
    </div>
  )
}
