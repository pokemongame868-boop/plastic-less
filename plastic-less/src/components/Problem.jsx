import Reveal from './Reveal'
import { PROBLEMS } from '../data'

export default function Problem() {
  return (
    <Reveal>
      <h2>Неліктен пластик қалдықтарын азайту маңызды?</h2>
      <div className="grid four">
        {PROBLEMS.map(([title, text], i) => (
          <article className="card problem" key={title}>
            <span className="big-n">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </Reveal>
  )
}
