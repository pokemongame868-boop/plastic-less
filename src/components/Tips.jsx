import Reveal from './Reveal'
import { TIPS } from '../data'

export default function Tips() {
  return (
    <Reveal>
      <h2>Бүгіннен бастауға болатын 5 қадам</h2>
      <ol className="tips">
        {TIPS.map((t, i) => <li key={t}><span className="big-n">0{i + 1}</span>{t}</li>)}
      </ol>
    </Reveal>
  )
}
