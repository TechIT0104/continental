export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gold/20 bg-noir/80 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="serif text-lg font-bold uppercase tracking-[0.25em] text-bone">
          Dhruv Samdani
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ash">
          Be seeing you · © {new Date().getFullYear()}
        </p>
        <a href="#top" className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold2 hover:underline">
          ↑ Back to the desk
        </a>
      </div>
    </footer>
  )
}
