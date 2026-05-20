const steps = [
  { n: '01', title: 'Discovery',    desc: 'We talk about your goals, audience, and what you need. No forms — just a real conversation.' },
  { n: '02', title: 'Proposal',     desc: 'You get a clear quote with timeline, deliverables, and pricing. No surprises.' },
  { n: '03', title: 'Design',       desc: 'I build mockups for your approval before any code is written.' },
  { n: '04', title: 'Development',  desc: 'Clean, fast code built for performance and SEO. You see progress along the way.' },
  { n: '05', title: 'Launch',       desc: 'After testing and your final sign-off, the site goes live.' },
]

export default function HowItWorks() {
  return (
    <section className="section" id="process">
      <div className="container">
        <h2 className="section-title">// how it works</h2>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="step-number">{s.n}</div>
              <div className="step-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}
