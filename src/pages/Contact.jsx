import { useState } from 'react'
import useOnScreen from '../hooks/useOnScreen'
import './Contact.css'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [ref, visible] = useOnScreen()

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!EMAIL_REGEX.test(form.email)) errs.email = 'Invalid email format'
    if (!form.subject.trim()) errs.subject = 'Subject is required'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setStatus('loading')
    fetch('https://formsubmit.co/ajax/poonghuzhali1990@gmail.com', {
      method: 'POST',
      body: new FormData(e.target),
    })
      .then(res => { if (!res.ok) throw new Error(); setStatus('success'); setForm({ name: '', email: '', subject: '', message: '' }); setTimeout(() => setStatus('idle'), 5000) })
      .catch(() => { setStatus('error'); setTimeout(() => setStatus('idle'), 5000) })
  }

  return (
    <section>
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Have a project in mind? Let's talk</p>

        <div className="contact-grid" ref={ref}>
          <form className={`contact-form reveal ${visible ? 'visible' : ''}`} onSubmit={handleSubmit} noValidate>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <div className="form-row">
              <div className="form-field">
                <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className={`form-input ${errors.name ? 'input-error' : ''}`} />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>
              <div className="form-field">
                <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} className={`form-input ${errors.email ? 'input-error' : ''}`} />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
            </div>
            <div className="form-field">
              <input type="text" name="_subject" placeholder="Subject" value={form.subject} onChange={handleChange} className={`form-input ${errors.subject ? 'input-error' : ''}`} />
              {errors.subject && <span className="field-error">{errors.subject}</span>}
            </div>
            <div className="form-field">
              <textarea name="message" placeholder="Your Message" rows={5} value={form.message} onChange={handleChange} className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`} />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>
            {status === 'error' && <div className="form-alert alert-error">Something went wrong. Please try again.</div>}
            {status === 'success' && <div className="form-alert alert-success">Message sent successfully! I'll get back to you soon.</div>}
            <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className={`contact-info reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
            <div className="contact-item">
              <span className="contact-icon">GH</span>
              <div><h4>GitHub</h4><p>github.com/Poonghuzhali</p></div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">LI</span>
              <div><h4>LinkedIn</h4><p>linkedin.com/in/poonghuzhali</p></div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">@</span>
              <div><h4>Email</h4><p>poonghuzhali1990@gmail.com</p></div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">LO</span>
              <div><h4>Location</h4><p>Remote / India</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
