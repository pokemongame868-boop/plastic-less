import { useState } from 'react'
import Reveal from './Reveal'

const FIELDS = [
  ['bottles', 'Пластикалық бөтелкелер'],
  ['bags', 'Пластикалық пакеттер'],
  ['cups', 'Бір реттік стакандар'],
  ['boxes', 'Бір реттік ыдыстар'],
]
const EMPTY = { bottles: '', bags: '', cups: '', boxes: '' }

export default function PlasticCalculator() {
  const [values, setValues] = useState(EMPTY)
  const [weekly, setWeekly] = useState(null)

  // Тек теріс емес бүтін сандарға рұқсат
  const change = (key, raw) => {
    const clean = raw === '' ? '' : String(Math.max(0, Math.floor(Number(raw)) || 0))
    setValues({ ...values, [key]: clean })
  }
  const submit = (e) => {
    e.preventDefault()
    setWeekly(Object.values(values).reduce((sum, v) => sum + (Number(v) || 0), 0))
  }
  const reset = () => { setValues(EMPTY); setWeekly(null) }

  return (
    <Reveal id="calc">
      <h2>Сіздің пластик ізіңіз қандай?</h2>
      <p className="sub">Бір аптада қанша бір реттік пластик қолданатыныңызды есептеп көріңіз.</p>
      <div className="calc">
        <form onSubmit={submit} className="card">
          {FIELDS.map(([key, label]) => (
            <label key={key}>{label}
              <input type="number" inputMode="numeric" min="0" step="1" placeholder="0" value={values[key]}
                onKeyDown={(e) => ['-', '+', 'e', 'E', '.', ','].includes(e.key) && e.preventDefault()}
                onChange={(e) => change(key, e.target.value)} />
            </label>
          ))}
          <div className="row">
            <button type="submit" className="btn primary">Есептеу</button>
            <button type="button" className="btn" onClick={reset}>Қайта есептеу</button>
          </div>
        </form>
        <div className="card result" aria-live="polite">
          {weekly === null ? (
            <p className="muted">Мәндерді енгізіп, «Есептеу» батырмасын басыңыз.</p>
          ) : (
            <>
              <p>Сіз аптасына</p>
              <div className="huge">{weekly}</div>
              <p>бір реттік пластик зат қолданасыз.</p>
              <p className="muted">Айына шамамен {weekly * 4} зат.</p>
              <h3>Егер тұтынуды азайтсаңыз:</h3>
              <ul className="cuts">
                {[25, 50, 75].map((p) => (
                  <li key={p}><span>{p}%</span><b>{Math.round((weekly * p) / 100)} зат</b></li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </Reveal>
  )
}
