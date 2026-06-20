import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const ACCENTS = {
  gold: { text: 'text-gold2', glow: 'glow-gold', border: 'border-gold', bg: 'bg-gold', dot: 'bg-gold' },
  teal: { text: 'text-teal', glow: 'glow-teal', border: 'border-teal', bg: 'bg-teal', dot: 'bg-teal' },
  crimson: { text: 'text-crimson', glow: 'glow-crimson', border: 'border-crimson', bg: 'bg-crimson', dot: 'bg-crimson' },
}
export const accent = (k) => ACCENTS[k] || ACCENTS.gold

/* Fixed cinematic overlays: cursor spotlight + rain + vignette + film grain. */
export function CinematicFX() {
  const [pos, setPos] = useState({ x: 50, y: 30 })
  useEffect(() => {
    let raf
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() =>
        setPos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 }),
      )
    }
    window.addEventListener('pointermove', onMove)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <>
      {/* spotlight (behind content) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity"
        style={{
          background: `radial-gradient(560px circle at ${pos.x}% ${pos.y}%, rgba(201,162,75,0.10), rgba(22,224,207,0.05) 35%, transparent 60%)`,
        }}
      />
      {/* rain */}
      <div className="rain animate-rain pointer-events-none fixed inset-0 z-[1] opacity-[0.5] [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />
      {/* vignette */}
      <div
        className="pointer-events-none fixed inset-0 z-[55]"
        style={{ background: 'radial-gradient(120% 120% at 50% 40%, transparent 55%, rgba(0,0,0,0.65) 100%)' }}
      />
      {/* film grain */}
      <div className="grain animate-flicker pointer-events-none fixed inset-0 z-[60] opacity-[0.06] mix-blend-overlay" />
    </>
  )
}

/* Section heading: mono kicker + serif title + gold hairline. */
export function Heading({ index, kicker, title, color = 'gold' }) {
  const a = accent(color)
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className="mb-12 md:mb-16"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="kicker">{index}</span>
        <span className="h-px w-10 bg-gold/60" />
        <span className="kicker">{kicker}</span>
      </div>
      <h2 className={`serif text-4xl font-bold uppercase tracking-wide sm:text-5xl md:text-6xl ${a.glow}`}>{title}</h2>
      <div className="gold-rule mt-5 h-px w-full" />
    </motion.div>
  )
}

/* Spinning Continental-style coin. */
export function Coin({ size = 48 }) {
  return (
    <div
      className="animate-spincoin grid place-items-center rounded-full border border-gold/60 shadow-gold"
      style={{
        width: size,
        height: size,
        background: 'radial-gradient(circle at 35% 30%, #f0d690, #c9a24b 55%, #7c6126)',
      }}
    >
      <span className="serif text-[0.6em] font-bold text-noir">DS</span>
    </div>
  )
}

/* Cursor-tilt wrapper. */
export function Tilt({ children, className = '', max = 7 }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 150, damping: 14 })
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 150, damping: 14 })
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative z-10 mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      {children}
    </section>
  )
}
