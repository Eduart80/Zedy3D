import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="navbar">
      <div className="container">
        <span className="navbar-logo">{'<Zedy3d />'}</span>
        <button className="navbar-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
        <ul className={`navbar-links${open ? ' navbar-links--open' : ''}`}>
          <li><a href="#about"    onClick={close}>About</a></li>
          <li><a href="#skills"   onClick={close}>Skills</a></li>
          <li><a href="#projects" onClick={close}>Projects</a></li>
          <li><a href="#services" onClick={close}>Services</a></li>
          <li><a href="#pricing"  onClick={close}>Pricing</a></li>
          <li><a href="#contact"  onClick={close}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
