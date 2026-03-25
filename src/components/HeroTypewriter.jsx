import { useEffect, useState } from 'react'

const PHRASES = ['Ship Safe.', 'Ship Fast.', 'Ship Efficient.']

export default function HeroTypewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const fn = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])

  useEffect(() => {
    if (reduceMotion) return undefined

    const full = PHRASES[phraseIndex]
    const typeMs = 72
    const eraseMs = 38
    const pauseMs = 2000
    const betweenMs = 280

    if (!deleting) {
      if (text.length < full.length) {
        const t = setTimeout(() => setText(full.slice(0, text.length + 1)), typeMs)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setDeleting(true), pauseMs)
      return () => clearTimeout(t)
    }

    if (text.length > 0) {
      const t = setTimeout(() => setText(full.slice(0, text.length - 1)), eraseMs)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setDeleting(false)
      setPhraseIndex((i) => (i + 1) % PHRASES.length)
    }, betweenMs)
    return () => clearTimeout(t)
  }, [text, deleting, phraseIndex, reduceMotion])

  if (reduceMotion) {
    return (
      <div className="hero-taglines hero-taglines--static" aria-live="polite">
        {PHRASES.map((p) => (
          <span key={p}>{p}</span>
        ))}
      </div>
    )
  }

  return (
    <p className="hero-typewriter" aria-live="polite">
      <span className="hero-typewriter__text">{text}</span>
      <span className="hero-typewriter__cursor" aria-hidden>
        |
      </span>
    </p>
  )
}
