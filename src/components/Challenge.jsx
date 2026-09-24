import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'
import Reveal from './Reveal'
import { TASKS } from '../data'

const KEY = 'plasticless-challenge'
const load = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY))
    if (Array.isArray(saved) && saved.length === TASKS.length) return saved
  } catch { /* localStorage қолжетімсіз болса, бос күйден бастаймыз */ }
  return TASKS.map(() => false)
}

export default function Challenge() {
  const [done, setDone] = useState(load)
  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(done)) } catch { /* ignore */ }
  }, [done])

  const count = done.filter(Boolean).length
  const toggle = (i) => setDone(done.map((d, j) => (j === i ? !d : d)))
  const clear = () => {
    if (window.confirm('Прогресті тазартуға сенімдісіз бе?')) setDone(TASKS.map(() => false))
  }

  return (
    <Reveal id="challenge">
      <h2>7 күн — 7 жаңа әдет</h2>
      <p className="sub">Күн сайын бір шағын әрекет жасап көріңіз.</p>
      <div className="progress-head"><b>{count} / 7 күн</b>
        <button className="btn sm" onClick={clear}>Прогресті тазарту</button></div>
      <div className="bar" role="progressbar" aria-valuemin={0} aria-valuemax={7} aria-valuenow={count}>
        <div style={{ width: `${(count / 7) * 100}%` }} />
      </div>
      <ol className="tasks">
        {TASKS.map(([title, text], i) => (
          <li key={title} className={`task ${done[i] ? 'done' : ''}`}>
            <span className="big-n">{i + 1}</span>
            <div><h3>{title}</h3><p>{text}</p></div>
            <button className={`btn sm ${done[i] ? 'primary' : ''}`} onClick={() => toggle(i)} aria-pressed={done[i]}>
              {done[i] && <Check size={16} />} Орындалды
            </button>
          </li>
        ))}
      </ol>
    </Reveal>
  )
}
