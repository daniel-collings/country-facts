import { Link } from 'react-router-dom'

export default function LayoutWithNav({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="space-y-4">
      <div className="navbar bg-base-200 rounded-xl">
        <div className="flex-1 px-4">
          <Link to="/" className="text-xl">
            Country Facts
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/countries">Countries</Link>
            </li>
          </ul>
        </div>
      </div>
      {children}
    </div>
  )
}
