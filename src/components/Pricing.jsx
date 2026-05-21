const plans = [
  {
    name: 'Website',
    price: '$800',
    type: 'one-time',
    features: ['Up to 6 pages', 'Custom design', 'Mobile responsive', 'Contact form', 'SEO optimized'],
    link: '#contact',
    featured: false,
  },
  {
    name: 'E-Commerce',
    price: '$2,000',
    type: 'one-time',
    features: ['Up to 6 pages + shop', 'Custom design', 'Mobile responsive', 'Online payments', 'Subscriptions', 'Apple & Google Pay', 'Email receipts'],
    link: '#contact',
    featured: true,
  },
  {
    name: 'App',
    price: '$3,500',
    type: 'starting at',
    features: ['Custom functionality', 'Database integration', 'User authentication', 'Admin dashboard', 'API integrations'],
    link: '#contact',
    featured: false,
  },
  {
    name: 'Platform',
    price: '$5,500',
    type: 'starting at',
    features: ['Website + store + app in one', 'User accounts & order history', 'Admin dashboard', 'Online payments & subscriptions', 'API integrations'],
    link: '#contact',
    featured: false,
  },
]

const maintenance = {
  price: '$150',
  type: 'per month',
  features: ['Bug fixes', 'Feature updates', 'Priority support', 'Uptime monitoring'],
  link: '#contact',
}

export default function Pricing({ onSelectPlan }) {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <h2 className="section-title">// pricing</h2>

        <div className="pricing-grid">
          {plans.map((p) => (
            <div className={`pricing-card${p.featured ? ' pricing-featured' : ''}`} key={p.name}>
              {p.featured && <span className="pricing-badge">POPULAR</span>}
              <h3 className="pricing-name">{p.name}</h3>
              <div className="pricing-amount">{p.price}</div>
              <div className="pricing-type">{p.type}</div>
              <ul className="pricing-features">
                {p.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <button
                className={`btn ${p.featured ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => onSelectPlan(`${p.name} — ${p.price} (${p.type})`)}
              >
                Get Started
              </button>
            </div>
          ))}

          <div className="pricing-card">
            <span className="pricing-badge" style={{ background: 'var(--accent2)', top: '-12px' }}>MONTHLY</span>
            <h3 className="pricing-name">Maintenance</h3>
            <div className="pricing-amount" style={{ color: 'var(--accent2)' }}>{maintenance.price}</div>
            <div className="pricing-type">{maintenance.type}</div>
            <ul className="pricing-features">
              {maintenance.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <button
              className="btn btn-outline"
              onClick={() => onSelectPlan(`Maintenance — ${maintenance.price} (${maintenance.type})`)}
            >
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
