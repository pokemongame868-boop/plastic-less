import { useState } from 'react'
import Reveal from './Reveal'
import { PLASTICS } from '../data'

export default function Sorting() {
  const [active, setActive] = useState(0)
  const p = PLASTICS[active]
  return (
    <Reveal id="sorting">
      <h2>Пластикті қалай сұрыптауға болады?</h2>
      <p className="sub">Пластиктің түрін арнайы таңбасы арқылы анықтауға болады. Қайта өңдеу мүмкіндігі жергілікті қабылдау орындарына байланысты.</p>
      <div className="sort">
        <div className="codes" role="tablist">
          {PLASTICS.map((t, i) => (
            <button key={t.code} role="tab" aria-selected={i === active} className={i === active ? 'on' : ''} onClick={() => setActive(i)}>
              <b>{t.n}</b> {t.code}
            </button>
          ))}
        </div>
        <article className="card detail" key={p.code}>
          <h3>{p.code} {p.n}</h3>
          <dl>
            <dt>Атауы</dt><dd>{p.name}</dd>
            <dt>Қайда кездеседі</dt><dd>{p.where}</dd>
            <dt>Қысқаша сипаттамасы</dt><dd>{p.desc}</dd>
            <dt>Ескерту</dt><dd>{p.note}</dd>
          </dl>
        </article>
      </div>
      <p className="muted small">Қайта өңдеу мүмкіндігі өңірдегі қабылдау пункттеріне байланысты.</p>
    </Reveal>
  )
}
