import { Link } from 'react-router-dom'
import { useTheme } from '@/hooks/useTheme.tsx'
import { ThemeEnum } from '@/types/enums.ts'

export default function LayoutWithNav({
  children
}: {
  children: React.ReactNode
}) {
  const { setTheme } = useTheme()

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
              <details>
                <summary>Theme</summary>
                <ul className="bg-base-100 rounded-t-none p-2 max-h-56 overflow-auto">
                  {Object.keys(ThemeEnum).map((theme) => (
                    <li key={theme}>
                      <button onClick={() => setTheme(ThemeEnum[theme])}>
                        {ThemeEnum[theme]}
                      </button>
                    </li>
                  ))}
                </ul>
              </details>
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
