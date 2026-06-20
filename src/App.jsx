import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { CinematicFX } from './components/ui'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CinematicFX />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
