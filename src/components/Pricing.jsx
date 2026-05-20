const plans = [
  {
    name: 'Website',
    price: '$800',
    type: 'one-time',
    features: ['Up to 6 pages', 'Custom design', 'Mobile responsive', 'Contact form', 'SEO optimized'],
    link: 'REPLACE_WEBSITE_STRIPE_LINK',
    featured: false,
  },
  {
    name: 'E-Commerce',
    price: '$2,000',
    type: 'one-time',
    features: ['Up to 6 pages + shop', 'Custom design', 'Mobile responsive', 'Online payments', 'Subscriptions', 'Apple & Google Pay', 'Email receipts'],
    link: 'REPLACE_ECOMMERCE_STRIPE_LINK',
    featured: true,
  },
  {
    name: 'App',
    price: '$3,500',
    type: 'starting at',
    features: ['Custom functionality', 'Database integration', 'User authentication', 'Admin dashboard', 'API integrations'],
    link: 'REPLACE_APP_STRIPE_LINK',
    featured: false,
  },
  {
    name: 'Platform',
    price: '$5,500',
    type: 'starting at',
    features: ['Website + store + app in one', 'User accounts & order history', 'Admin dashboard', 'Online payments & subscriptions', 'API integrations'],
    link: 'REPLACE_PLATFORM_STRIPE_LINK',
    featured: false,
  },
]

const maintenance = {
  price: '$100',
  type: 'per month',
  features: ['Bug fixes', 'Feature updates', 'Priority support', 'Uptime monitoring'],
  link: 'REPLACE_MAINTENANCE_STRIPE_LINK',
}

export default function Pricing() {
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
              <a href={p.link} className={`btn ${p.featured ? 'btn-primary' : 'btn-outline'}`} target="_blank" rel="noreferrer">
                Get Started
              </a>
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
            <a href={maintenance.link} className="btn btn-outline" target="_blank" rel="noreferrer">
              Subscribe
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
