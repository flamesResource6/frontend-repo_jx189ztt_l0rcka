import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkBase = 'px-3 py-2 rounded-lg text-sm font-medium transition-colors'
  const linkActive = 'text-white bg-slate-800/70'
  const linkIdle = 'text-slate-400 hover:text-white hover:bg-slate-800/50'

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 dark:bg-slate-900/60 border-b border-slate-200/50 dark:border-slate-800"> 
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
            <span className="text-white font-bold">WD</span>
          </div>
          <span className="font-semibold text-slate-900 dark:text-white">Web Developer</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end className={({isActive}) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="ml-2 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow">
            Let’s Talk <ArrowRight size={16} />
          </Link>
        </div>

        <button className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end className={({isActive}) => `${linkBase} ${isActive ? linkActive : linkIdle}`} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg shadow hover:shadow-md">
              Let’s Talk <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
