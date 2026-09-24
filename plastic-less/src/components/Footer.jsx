import { NAV, scrollToId } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div><div className="logo static">PLASTIC LESS</div>
          <p className="muted">Пластикалық қалдықтарды азайту туралы ақпараттық жоба.</p></div>
        <nav>{NAV.map((n) => <button key={n.id} onClick={() => scrollToId(n.id)}>{n.label}</button>)}</nav>
      </div>
      <div className="wrap muted small">© 2026 Plastic Less</div>
    </footer>
  )
}
