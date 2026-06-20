import { motion } from 'framer-motion'
import { achievements } from '../data'
import { Section, Heading, accent } from './ui'

const COLORS = ['gold', 'teal', 'crimson', 'gold', 'teal', 'crimson']

export default function Achievements() {
  return (
    <Section id="commendations">
      <Heading index="04" kicker="Commendations" title="Achievements" color="gold" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => {
          const c = accent(COLORS[i % COLORS.length])
          return (
            <motion.div
              key={a.group}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="lux-card flex h-full flex-col p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className={`serif text-lg font-bold uppercase tracking-wide ${c.text}`}>{a.group}</h3>
                <span className="font-mono text-xs text-gold/50">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <ul className="space-y-2.5">
                {a.items.map((it, j) => (
                  <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-bone/75">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 ${c.dot}`} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
