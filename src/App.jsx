import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Pricing  from './components/Pricing'
import Contact  from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          Built with React &amp; Vite — © {new Date().getFullYear()} Zedy3d
        </div>
      </footer>
    </>
  )
}
