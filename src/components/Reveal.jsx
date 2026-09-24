import { useEffect, useRef, useState } from 'react'

// Bir ret gana jyly payda bolatyn bólim
export default function Reveal({ id, className = '', children }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <section id={id} ref={ref} className={`section reveal ${shown ? 'in' : ''} ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  )
}
