import './Home.css'

export default function Home() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-badge">Welcome to my portfolio</div>
        <h1 className="hero-title">
          Hi, I'm <span className="hero-name">Your Name</span>
        </h1>
        <p className="hero-desc">
          A passionate developer who loves building beautiful, functional web experiences.
          I turn ideas into polished digital products.
        </p>
        <div className="hero-actions">
          <a href="/portfolio/projects" className="btn btn-primary">View Projects</a>
          <a href="/portfolio/contact" className="btn btn-outline">Get in Touch</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat">
            <span className="stat-number">20+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Clients</span>
          </div>
        </div>
      </div>
    </section>
  )
}
