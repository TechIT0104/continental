import { useEffect, useState } from 'react'

const LINKS = [
  ['profile', 'About'],
  ['arsenal', 'Skills'],
  ['contracts', 'Projects'],
  ['commendations', 'Achievements'],
  ['offrecord', 'Gallery'],
  ['contact', 'Contact'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'border-b border-gold/25 bg-noir/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/70 text-gold2 transition-transform group-hover:rotate-180 duration-500">
            <span className="serif text-sm font-bold">DS</span>
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="serif text-sm font-bold uppercase tracking-[0.25em] text-bone">Dhruv Samdani</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold/70">The Continental</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ash transition-colors hover:text-gold2"
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="btn-lux btn-gold ml-2 px-4 py-2 text-[10px]">
            Make Contact
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded border border-gold/40 text-gold2 md:hidden"
        >
          <span className="text-lg leading-none">{open ? '✕' : '≡'}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold/20 bg-noir/95 px-5 pb-4 pt-2 md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {LINKS.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="rounded border border-gold/25 px-3 py-2 text-center font-mono text-[11px] font-bold uppercase tracking-wider text-bone"
              >
                {label}
              </a>
            ))}
          </div>
          <a href="#contact" onClick={() => setOpen(false)} className="btn-lux btn-gold mt-2 w-full">
            Make Contact
          </a>
        </div>
      )}
    </header>
  )
}
