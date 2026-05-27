import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge anim-fade-up" style={{ animationDelay: '0.1s' }}>
            Welcome to my portfolio
          </div>
          <h1 className="hero-title anim-fade-up" style={{ animationDelay: '0.25s' }}>
            Hi, I'm <span className="hero-name">Poonghuzhali</span>
            <span className="hero-surname">Ponniyinselvan</span>
          </h1>
          <p className="hero-desc anim-fade-up" style={{ animationDelay: '0.4s' }}>
            Python Full-Stack Developer with experience in Django, React, and data analytics.
            I build clean, functional web applications.
          </p>
          <div className="hero-actions anim-fade-up" style={{ animationDelay: '0.55s' }}>
            <Link to="/projects" className="btn btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
          <div className="hero-stats anim-fade-up" style={{ animationDelay: '0.7s' }}>
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
        <div className="hero-image-wrapper anim-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="hero-image-ring" />
          <img src="/portfolio/images/Myphoto.png" alt="Poonghuzhali" className="hero-image" />
        </div>
      </div>
    </section>
  )
}
