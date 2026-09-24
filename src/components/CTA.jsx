import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { scrollToId } from '../data'

export default function CTA() {
  return (
    <Reveal className="cta">
      <h2 className="cta-title">Кішкентай әдет —<br />үлкен өзгерістің бастауы.</h2>
      <p className="lead">Пластик қалдықтарын азайту бір күнде болмайды. Бірақ алғашқы қадамды бүгін жасауға болады.</p>
      <button className="btn primary" onClick={() => scrollToId('habits')}>Бастау <ArrowRight size={18} /></button>
    </Reveal>
  )
}
