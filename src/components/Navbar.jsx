import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV, scrollToId } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const go = (id) => { setOpen(false); scrollToId(id) }
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <button className="logo" onClick={() => go('home')} aria-label="Plastic Less">PLASTIC<br />LESS</button>
        <nav className={`links ${open ? 'open' : ''}`}>
          {NAV.map((n) => <button key={n.id} onClick={() => go(n.id)}>{n.label}</button>)}
          <button className="btn primary sm mob-only" onClick={() => go('habits')}>Бастау</button>
        </nav>
        <button className="btn primary sm desk-only" onClick={() => go('habits')}>Бастау</button>
        <button className="icon-btn mob-only" onClick={() => setOpen(!open)} aria-label={open ? 'Жабу' : 'Мәзір'} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
