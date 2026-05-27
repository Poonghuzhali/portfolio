import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    fetch('https://formsubmit.co/ajax/poonghuzhali1990@gmail.com', {
      method: 'POST',
      body: new FormData(e.target),
    }).then(() => {
      setSent(true)
      e.target.reset()
      setTimeout(() => setSent(false), 4000)
    }).catch(() => {})
  }

  return (
    <section>
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Have a project in mind? Let's talk</p>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" required className="form-input" />
              <input type="email" name="email" placeholder="Your Email" required className="form-input" />
            </div>
            <input type="text" name="_subject" placeholder="Subject" required className="form-input" />
            <textarea name="message" placeholder="Your Message" rows={5} required className="form-input form-textarea" />
            <button type="submit" className="btn btn-primary">
              {sent ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>

          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">GH</span>
              <div>
                <h4>GitHub</h4>
                <p>github.com/Poonghuzhali</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">LI</span>
              <div>
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/poonghuzhali</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">@</span>
              <div>
                <h4>Email</h4>
                <p>poonghuzhali1990@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">LO</span>
              <div>
                <h4>Location</h4>
                <p>Remote / India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
