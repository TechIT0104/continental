import { motion } from 'framer-motion'
import { skills } from '../data'
import { Section, Heading, accent } from './ui'

const COLORS = ['gold', 'teal', 'crimson', 'gold', 'teal', 'crimson']

export default function Skills() {
  return (
    <Section id="arsenal">
      <Heading index="02" kicker="The Arsenal" title="Skills & Tech" color="teal" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => {
          const a = accent(COLORS[i % COLORS.length])
          return (
            <motion.div
              key={s.group}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="lux-card p-6"
            >
              <div className="mb-4 flex items-center gap-2.5">
                <span className={`h-2.5 w-2.5 rotate-45 ${a.dot}`} />
                <h3 className={`serif text-lg font-bold uppercase tracking-wide ${a.text}`}>{s.group}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span key={it} className="chip-lux hover:border-gold/60 hover:text-gold2">{it}</span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
