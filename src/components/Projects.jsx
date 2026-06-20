import { motion } from 'framer-motion'
import { projects } from '../data'
import { Section, Heading, Tilt, accent } from './ui'
import { GitHubIcon, ExternalIcon } from './icons'

function ProjectCard({ p, i }) {
  const a = accent(p.accent)
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
    >
      <Tilt className="h-full">
        <article className="lux-card relative flex h-full flex-col overflow-hidden">
          {/* top accent line */}
          <span className={`absolute inset-x-0 top-0 h-[3px] ${a.bg} opacity-80`} />

          <div className="flex items-start justify-between gap-3 p-5 pb-3">
            <div>
              <h3 className={`serif text-2xl font-bold uppercase tracking-wide ${a.text}`}>{p.title}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ash">{p.subtitle}</p>
            </div>
            <div className="flex shrink-0 gap-1.5">
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer" aria-label="GitHub"
                  className="grid h-9 w-9 place-items-center rounded-md border border-gold/30 text-ash transition-colors hover:border-gold hover:text-gold2">
                  <GitHubIcon width={16} height={16} />
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Live demo"
                  className="grid h-9 w-9 place-items-center rounded-md border border-gold/30 text-ash transition-colors hover:border-gold hover:text-gold2">
                  <ExternalIcon width={16} height={16} />
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-1 flex-col px-5 pb-5">
            <ul className="space-y-2.5">
              {p.points.map((pt, j) => (
                <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-bone/75">
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 ${a.dot}`} />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 pt-1">
              {p.stack.map((t) => (
                <span key={t} className="chip-lux">{t}</span>
              ))}
            </div>
          </div>
        </article>
      </Tilt>
    </motion.div>
  )
}

function GroupLabel({ children }) {
  return (
    <div className="mb-6 mt-16 flex items-center gap-4">
      <span className="serif text-xl font-bold uppercase tracking-[0.2em] text-gold2">{children}</span>
      <span className="gold-rule h-px flex-1" />
    </div>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.group === 'featured')
  const more = projects.filter((p) => p.group === 'more')
  const hackathon = projects.filter((p) => p.group === 'hackathon')

  return (
    <Section id="contracts">
      <Heading index="03" kicker="Contracts Fulfilled" title="Projects" color="crimson" />

      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>

      <GroupLabel>More Projects</GroupLabel>
      <div className="grid gap-6 md:grid-cols-2">
        {more.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>

      <GroupLabel>Hackathons</GroupLabel>
      <div className="grid gap-6 md:grid-cols-2">
        {hackathon.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </Section>
  )
}
