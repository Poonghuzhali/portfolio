import './About.css'

export default function About() {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A bit about who I am and what I do</p>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-avatar">JD</div>
            <h3>John Doe</h3>
            <p className="about-role">Full-Stack Developer</p>
            <p className="about-desc">
              I'm a developer with a passion for creating clean, user-friendly applications.
              I specialize in React, Node.js, and modern JavaScript ecosystems.
            </p>
          </div>

          <div className="about-details">
            <div className="detail-item">
              <h4>Background</h4>
              <p>
                With over 3 years of professional experience, I've worked with startups and agencies
                to deliver high-quality web applications. I believe in writing clean code that
                scales and creating experiences that users love.
              </p>
            </div>
            <div className="detail-item">
              <h4>What I Value</h4>
              <p>
                Clean architecture, thoughtful design, and maintainable code. I'm a strong advocate
                for user-centric development and continuous learning.
              </p>
            </div>
            <div className="detail-item">
              <h4>Outside Code</h4>
              <p>
                When I'm not coding, you'll find me exploring new technologies, reading, or
                enjoying a good cup of coffee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
