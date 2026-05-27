import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-badge">Welcome to my portfolio</div>
        <h1 className="hero-title">
          Hi, I'm <span className="hero-name">Poonghuzhali Ponniyinselvan</span>
        </h1>
        <p className="hero-desc">
          Python Full-Stack Developer with experience in Django, React, and data analytics.
          I build clean, functional web applications.
        </p>
        <div className="hero-actions">
          <Link to="/projects" className="btn btn-primary">View Projects</Link>
          <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">6+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat">
            <span className="stat-number">Python</span>
            <span className="stat-label">Core Stack</span>
          </div>
        </div>
      </div>
    </section>
  )
}
