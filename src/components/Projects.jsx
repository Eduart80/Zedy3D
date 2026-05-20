const alsoBuilt = [
  { name: 'MERN Stack Projects',         tech: ['React', 'Node.js', 'MongoDB', 'Express'] },
  { name: 'Blockchain Trading Bots',     tech: ['Solidity', 'Web3.js', 'Node.js'] },
  { name: 'Full-Stack Web3',        tech: ['Solidity', 'Ethers.js', 'React'] },
  { name: 'E-Commerce Site',             tech: ['HTML', 'CSS', 'JavaScript'] },
  { name: 'Mobile App Mockup',           tech: ['HTML', 'CSS', 'JavaScript'] },
  { name: 'Cleaning Service Web-App',    tech: ['React', 'Vite'] },
  { name: 'HVAC Business Website',       tech: ['React', 'Vite'] },
  { name: 'Soccer Academy Website',       tech: ['React', 'SQL', 'Rest API'] },
  { name: 'Home Inspection Website',       tech: ['React'] },
  { name: 'Playwright Automation', tech: ['TypeScript', 'Playwright'] },
  { name: 'Selenium + Java Testing',     tech: ['Java', 'Selenium', 'JUnit'] },
  { name: 'Java & Azure Dev',            tech: ['Java', 'Azure', 'Spring'] },
]

const projects = [
  {
    id: 1,
    name: 'Contractor Website',
    description: 'Landing page for a contractor business featuring services showcase, client testimonials, and a booking form.',
    tags: ['React', 'Vite', 'CSS'],
    github: 'https://github.com/Eduart80/contractor-website',
    demo: '',
  },
  {
    id: 2,
    name: 'Job Tracker API',
    description: 'REST API for service businesses to manage clients and jobs. Includes JWT auth, full CRUD, job filtering by status/client, and input validation.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/Eduart80/job-tracker-api',
    demo: 'https://job-tracker-api.onrender.com',
  },
  {
    id: 3,
    name: 'Mini CRM',
    description: 'Client relationship management app with Firebase authentication, protected routes, and full CRUD for managing client records.',
    tags: ['React', 'Firebase', 'React Router'],
    github: 'https://github.com/Eduart80/mini-crm',
    demo: '',
  },
  {
    id: 4,
    name: 'SaaS Lead Tracker',
    description: 'SaaS app for tracking and managing leads with a public landing page, Firebase auth, dashboard, and full lead CRUD.',
    tags: ['React', 'Firebase', 'SaaS', 'React Router'],
    github: 'https://github.com/Eduart80/saas-lead-tracker',
    demo: '',
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                {p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub →</a>}
                {p.demo   && <a href={p.demo}   target="_blank" rel="noreferrer">Live Demo →</a>}
              </div>
            </div>
          ))}
        </div>

        <div className="also-built">
          <h3 className="also-built-title">Also Built</h3>
          <ul className="also-built-list">
            {alsoBuilt.map((item) => (
              <li key={item.name} className="also-built-item">
                <span className="also-built-name">{item.name}</span>
                <span className="also-built-tags">
                  {item.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
