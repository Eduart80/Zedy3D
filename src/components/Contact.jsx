import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact({ selectedPlan }) {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success')
        formRef.current.reset()
      })
      .catch(() => setStatus('error'))
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-card">
          <p>
            I'm open to new opportunities, collaborations, and interesting
            projects. Feel free to reach out!
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="from_name">Name</label>
                <input
                  id="from_name"
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="from_email">Email</label>
                <input
                  id="from_email"
                  type="email"
                  name="from_email"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                required
              />
            </div>
            {selectedPlan && (
              <div className="form-group">
                <label htmlFor="plan">Selected Plan</label>
                <input
                  id="plan"
                  type="text"
                  name="plan"
                  value={selectedPlan}
                  readOnly
                  style={{ opacity: 0.7, cursor: 'default' }}
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                required
              />
            </div>

            {status === 'success' && (
              <p className="form-feedback form-success">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="form-feedback form-error">
                Something went wrong. Please try again or email me directly.
              </p>
            )}

            <div className="form-actions">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </div>
          </form>

          <div className="contact-divider" />

          <div className="contact-links">
            <a
              className="btn btn-outline"
              href="https://github.com/Eduart80"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-outline"
              href="https://www.linkedin.com/in/eduart-zina/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
