import { motion } from 'framer-motion'
import { about, education, stats } from '../data'
import { Section, Heading } from './ui'

export default function About() {
  return (
    <Section id="profile">
      <Heading index="01" kicker="The Profile" title="About" color="gold" />

      <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="lux-card brackets p-7"
        >
          <p className="kicker mb-4">Background</p>
          <div className="space-y-4 text-lg leading-relaxed text-bone/85">
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lux-card p-6"
          >
            <p className="kicker mb-4">By the Numbers</p>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-md border border-gold/20 bg-noir/50 p-3 text-center">
                  <div className="serif text-3xl font-bold text-gold2">{s.value}</div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-ash">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lux-card p-6"
          >
            <p className="kicker mb-4">Education</p>
            <div className="space-y-3">
              {education.map((e) => (
                <div key={e.school} className="border-l-2 border-gold/50 pl-3">
                  <div className="font-semibold leading-tight text-bone">{e.school}</div>
                  <div className="text-sm text-ash">{e.degree} · {e.detail}</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-gold/60">{e.period}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
