import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gallery } from '../data'
import { Section, Heading } from './ui'

export default function Gallery() {
  const [active, setActive] = useState(null)
  const [broken, setBroken] = useState({})
  if (gallery.length === 0) return null

  return (
    <Section id="offrecord">
      <Heading index="05" kicker="Off the Record" title="Beyond the Code" color="teal" />

      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {gallery.map((g, i) =>
          broken[i] ? null : (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              onClick={() => setActive(g)}
              className="group brackets relative block aspect-[4/5] overflow-hidden rounded-md border border-gold/25 bg-noir transition-all hover:border-gold/60"
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                onError={() => setBroken((b) => ({ ...b, [i]: true }))}
                className="h-full w-full object-cover object-center grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/10 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-3 text-left font-mono text-[10px] uppercase tracking-wider text-bone sm:text-[11px]">
                {g.caption}
              </span>
            </motion.button>
          ),
        )}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] grid place-items-center bg-noir/90 p-6 backdrop-blur"
          >
            <motion.figure
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[86vh] max-w-3xl overflow-hidden rounded-lg border border-gold/40 shadow-gold"
            >
              <img src={active.src} alt={active.caption} className="max-h-[78vh] w-auto" />
              <figcaption className="border-t border-gold/30 bg-coal p-3 text-center font-mono text-xs uppercase tracking-wider text-gold2">
                {active.caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
