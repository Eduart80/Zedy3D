const services = [
  {
    icon: '◻',
    title: 'Websites',
    desc: 'Clean, fast, SEO-optimized websites that represent your brand and convert visitors into customers.',
    tags: ['Custom Design', 'Mobile First', 'SEO Ready'],
  },
  {
    icon: '◈',
    title: 'E-Commerce',
    desc: 'Full online stores with Stripe payments, subscriptions, Apple Pay, Google Pay and automated receipts.',
    tags: ['Stripe', 'Subscriptions', 'Apple & Google Pay'],
  },
  {
    icon: '◉',
    title: 'Apps',
    desc: 'Web and mobile applications built for performance. Booking systems, dashboards, custom platforms.',
    tags: ['Web Apps', 'Booking Systems', 'Dashboards'],
  },
  {
    icon: '◎',
    title: 'Maintenance',
    desc: 'Keep your product running smooth. Updates, fixes, new features, and uptime monitoring every month.',
    tags: ['Bug Fixes', 'Feature Updates', 'Priority Support'],
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="section-title">// services</h2>
        <div className="projects-grid">
          {services.map((s) => (
            <div className="project-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="project-tags">
                {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
