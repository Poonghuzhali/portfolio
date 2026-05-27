import './About.css'

export default function About() {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A bit about who I am and what I do</p>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-avatar-wrapper">
              <img src="/portfolio/images/Myphoto.png" alt="Poonghuzhali" className="about-photo" />
            </div>
            <h3>Poonghuzhali Ponniyinselvan</h3>
            <p className="about-role">Python Full-Stack Developer</p>
            <p className="about-desc">
              Passionate about building web applications with Python, Django, and React.
              Always eager to learn and take on new challenges.
            </p>
          </div>

          <div className="about-details">
            <div className="detail-item">
              <h4>Background</h4>
              <p>
                5 months Internship at Vetri IT Solutions as a Junior Python Developer,
                working on real-world web applications. Previously spent 6+ years in data
                analytics at HCL and Flipkart, bringing a strong analytical mindset to development.
              </p>
            </div>
            <div className="detail-item">
              <h4>What I Do</h4>
              <p>
                I build full-stack web applications using Python, Django, and React.
                From crafting responsive frontends with Tailwind CSS to designing robust backends,
                I enjoy the entire development lifecycle.
              </p>
            </div>
            <div className="detail-item">
              <h4>Outside Code</h4>
              <p>
                When I'm not coding, I explore new AI tools, work on personal projects,
                and stay up-to-date with the latest in tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
