import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile, socials } from '../data'
import { Coin, Tilt } from './ui'
import { GitHubIcon, LinkedInIcon, CodeIcon, MailIcon, DownloadIcon, ArrowDownIcon } from './icons'

function useTypewriter(words, speed = 80, pause = 1500) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const cur = words[i % words.length]
    let t
    if (!del && text === cur) t = setTimeout(() => setDel(true), pause)
    else if (del && text === '') {
      setDel(false)
      setI((p) => p + 1)
    } else {
      t = setTimeout(
        () => setText((p) => (del ? cur.slice(0, p.length - 1) : cur.slice(0, p.length + 1))),
        del ? speed / 2 : speed,
      )
    }
    return () => clearTimeout(t)
  }, [text, del, i, words, speed, pause])
  return text
}

export default function Hero() {
  const role = useTypewriter(profile.roles)
  const [photoOk, setPhotoOk] = useState(Boolean(profile.photo))

  return (
    <section id="top" className="relative z-10 flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT */}
        <div>
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-teal"
          >
            <span className="h-2 w-2 animate-ping rounded-full bg-teal" />
            Open for contracts — internships & full-time
          </motion.span>

          <p className="kicker mb-3">Classified Dossier № 0104</p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="serif glow-gold text-6xl font-black uppercase leading-[0.95] tracking-wide sm:text-7xl md:text-[5rem]"
          >
            Dhruv
            <br />
            Samdani
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 font-mono text-base text-teal sm:text-lg"
          >
            {'> '}
            {role}
            <span className="animate-pulse">_</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ash"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#contracts" className="btn-lux btn-gold">
              View the work
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-lux btn-ghost">
              <DownloadIcon width={16} height={16} /> Résumé
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-9 flex items-center gap-3"
          >
            {[
              [socials.github, GitHubIcon, 'GitHub'],
              [socials.linkedin, LinkedInIcon, 'LinkedIn'],
              [socials.leetcode, CodeIcon, 'LeetCode'],
              [`mailto:${profile.email}`, MailIcon, 'Email'],
            ].map(([href, Icon, label]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-md border border-gold/35 text-ash transition-all hover:-translate-y-1 hover:border-gold hover:text-gold2"
              >
                <Icon width={19} height={19} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — dossier card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto w-full max-w-sm"
        >
          <Tilt className="animate-floaty">
            <div className="lux-card brackets relative overflow-hidden p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">High Table · Dossier</span>
                <Coin size={40} />
              </div>

              {/* photo with scanner sweep */}
              <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-md border border-gold/30 bg-noir">
                {photoOk ? (
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    onError={() => setPhotoOk(false)}
                    className="h-full w-full object-cover object-center contrast-[1.08] grayscale transition-all duration-700 hover:grayscale-0"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center serif text-7xl text-gold2">DS</div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent" />
                <div className="animate-sweep pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
                {/* ACTIVE stamp */}
                <span className="absolute right-2 top-2 -rotate-12 rounded border-2 border-crimson/80 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-crimson/90">
                  Active
                </span>
              </div>

              <h3 className="serif mt-4 text-center text-2xl font-bold uppercase tracking-wide text-bone">{profile.name}</h3>
              <p className="text-center font-mono text-[11px] uppercase tracking-[0.25em] text-gold2">{profile.classification}</p>

              <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-gold/20 bg-gold/10 text-center">
                {[
                  ['Codename', profile.codename],
                  ['Coins', profile.coins.toLocaleString('en-IN')],
                  ['Base', 'Prayagraj, IN'],
                  ['Status', 'Recruitable'],
                ].map(([k, v]) => (
                  <div key={k} className="bg-coal px-2 py-2.5">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-ash">{k}</div>
                    <div className="mt-0.5 text-sm font-semibold text-bone">{v}</div>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
                Specialty · {profile.specialty}
              </p>
            </div>
          </Tilt>
        </motion.div>
      </div>

      <a href="#profile" aria-label="Scroll" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-gold/60">
        <ArrowDownIcon />
      </a>
    </section>
  )
}
