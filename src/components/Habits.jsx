import { useState } from 'react'
import { ArrowRight, Info } from 'lucide-react'
import Reveal from './Reveal'
import { HABITS } from '../data'

export default function Habits() {
  const [openIdx, setOpenIdx] = useState(null)
  return (
    <Reveal id="habits">
      <h2>Пластикті азайтудың қарапайым жолдары</h2>
      <p className="sub">Күнделікті өмірдегі бірнеше қарапайым өзгеріс пластик тұтынуын азайтуға көмектеседі.</p>
      <div className="grid habits">
        {HABITS.map(([from, to, tip], i) => {
          const open = openIdx === i
          return (
            <button key={from} className={`card habit ${open ? 'open' : ''}`} aria-expanded={open}
              onClick={() => setOpenIdx(open ? null : i)}>
              <span className="big-n">0{i + 1}</span>
              <span className="from">{from}</span>
              <ArrowRight size={18} className="arrow" />
              <strong>{to}</strong>
              <span className="tip"><span><Info size={16} /> {tip}</span></span>
            </button>
          )
        })}
      </div>
    </Reveal>
  )
}
