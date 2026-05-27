import './Projects.css'

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-featured online store with cart, checkout, and admin dashboard built with React and Node.js.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    color: '#6c5ce7',
  },
  {
    title: 'Task Manager App',
    desc: 'Collaborative project management tool with real-time updates, drag-and-drop, and team workspaces.',
    tags: ['Next.js', 'Socket.io', 'MongoDB', 'Tailwind'],
    color: '#00b894',
  },
  {
    title: 'Weather Dashboard',
    desc: 'Real-time weather visualization app with 7-day forecasts, maps, and location-based alerts.',
    tags: ['React', 'D3.js', 'OpenWeather API', 'Geolocation'],
    color: '#0984e3',
  },
  {
    title: 'Social Media Analytics',
    desc: 'Analytics dashboard for tracking engagement, growth, and content performance across platforms.',
    tags: ['Vue.js', 'Python', 'Chart.js', 'Firebase'],
    color: '#e17055',
  },
]

export default function Projects() {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some things I've built</p>

        <div className="projects-grid">
          {projects.map(p => (
            <div key={p.title} className="project-card" style={{ '--accent-color': p.color }}>
              <div className="project-top" style={{ background: p.color }} />
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(t => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
