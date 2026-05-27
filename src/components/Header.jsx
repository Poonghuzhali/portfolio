import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/experience', label: 'Experience' },
  { path: '/contact', label: 'Contact' },
]

export default function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">P</span>
          Portfolio
        </Link>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={`hambar ${open ? 'open' : ''}`} />
        </button>
        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {links.map(l => (
            <Link
              key={l.path}
              to={l.path}
              className={`nav-link ${pathname === l.path ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
