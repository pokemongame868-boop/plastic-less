import { ArrowDown, Calculator } from 'lucide-react'
import { scrollToId } from '../data'

const BOTTLE = 'M20 6h20v16c0 8 12 12 12 30v58a10 10 0 0 1-10 10H18a10 10 0 0 1-10-10V52c0-18 12-22 12-30z'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1>Пластикалық қалдықтарды азайтудың тиімді жолдары</h1>
          <p className="lead">Күнделікті әдеттерді өзгерту арқылы пластикалық қалдықтарды азайтуға болады.</p>
          <div className="row">
            <button className="btn primary" onClick={() => scrollToId('habits')}>Қалай бастауға болады <ArrowDown size={18} /></button>
            <button className="btn" onClick={() => scrollToId('calc')}><Calculator size={18} /> Өз үлесіңді есепте</button>
          </div>
        </div>
        <figure className="art" aria-hidden="true">
          <svg viewBox="0 0 240 150" fill="none" stroke="currentColor" strokeWidth="1">
            {[0, 1, 2, 3].map((i) => (
              <path key={i} d={BOTTLE} transform={`translate(${10 + i * 56} ${i % 2 ? 22 : 8}) scale(.9)`}
                className={i === 2 ? 'accent-fill' : ''} strokeOpacity={i === 2 ? 1 : 0.45} />
            ))}
          </svg>
          <figcaption>Кішкентай өзгеріс. Үлкен әсер.</figcaption>
        </figure>
      </div>
    </section>
  )
}
