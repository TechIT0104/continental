import { motion } from 'framer-motion'
import { profile, socials } from '../data'
import { Section, Heading, Coin } from './ui'
import { GitHubIcon, LinkedInIcon, CodeIcon, MailIcon } from './icons'

export default function Contact() {
  return (
    <Section id="contact">
      <Heading index="06" kicker="Make Contact" title="Get in Touch" color="crimson" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55 }}
        className="lux-card brackets relative overflow-hidden p-8 text-center md:p-14"
      >
        <div className="mb-6 flex justify-center">
          <Coin size={56} />
        </div>

        <p className="kicker mb-3">The Continental · Front Desk</p>
        <h3 className="serif mx-auto max-w-2xl text-2xl font-bold uppercase tracking-wide text-bone sm:text-3xl">
          Have a role, a team, or a hard problem? Let's talk.
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-ash">
          Open to 6-month internships and full-time software / ML roles.
        </p>

        <a href={`mailto:${profile.email}`} className="btn-lux btn-gold mx-auto mt-8 text-sm">
          <MailIcon width={18} height={18} /> {profile.email}
        </a>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 font-mono text-xs uppercase tracking-wider text-ash sm:flex-row sm:gap-8">
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hover:text-gold2">{profile.phone}</a>
          <span>{profile.location}</span>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
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
              className="grid h-12 w-12 place-items-center rounded-md border border-gold/35 text-ash transition-all hover:-translate-y-1 hover:border-gold hover:text-gold2"
            >
              <Icon width={20} height={20} />
            </a>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
