const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Java', 'React', 'SQL',
  'Node.js', 'Express', 'MongoDB', 'REST APIs', 'GraphQL',
  'Playwright', 'WebdriverIO', 'Mocha', 'Chai', 'Jest',
  'Selenium', 'GitHub', 'Docker', 'Jenkins', 'IBM AS/400'
]
 

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill} className="skill-chip">{skill}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
