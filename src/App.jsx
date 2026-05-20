import { useState } from 'react'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import Services    from './components/Services'
import HowItWorks  from './components/HowItWorks'
import Pricing     from './components/Pricing'
import Contact  from './components/Contact'

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState('')

  function handleSelectPlan(plan) {
    setSelectedPlan(plan)
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Services />
        <HowItWorks />
        <Pricing onSelectPlan={handleSelectPlan} />
        <Contact selectedPlan={selectedPlan} />
      </main>
      <footer className="footer">
        <div className="container">
          Built with React &amp; Vite — © {new Date().getFullYear()} Zedy3d
        </div>
      </footer>
    </>
  )
}
