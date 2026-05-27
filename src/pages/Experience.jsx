import './Experience.css'

const experience = [
  {
    role: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    period: 'Jan 2024 — Present',
    desc: 'Leading frontend architecture for a SaaS platform serving 50K+ users. Building reusable component libraries and mentoring junior developers.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'StartupXYZ',
    period: 'Mar 2022 — Dec 2023',
    desc: 'Developed and shipped 5+ major features across the stack. Reduced page load times by 40% through code splitting and lazy loading.',
  },
  {
    role: 'Junior Developer',
    company: 'WebAgency Co.',
    period: 'Jun 2021 — Feb 2022',
    desc: 'Built responsive websites and web apps for 10+ clients. Collaborated closely with designers to deliver pixel-perfect implementations.',
  },
]

const education = [
  { degree: 'B.S. Computer Science', school: 'University of Technology', year: '2021' },
  { degree: 'Full-Stack Web Dev Bootcamp', school: 'Online Academy', year: '2020' },
]

export default function Experience() {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>

        <div className="exp-timeline">
          {experience.map((item, i) => (
            <div key={i} className="exp-card">
              <div className="exp-dot" />
              <div className="exp-content">
                <span className="exp-period">{item.period}</span>
                <h3 className="exp-role">{item.role}</h3>
                <span className="exp-company">{item.company}</span>
                <p className="exp-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="section-title" style={{ marginTop: 64, fontSize: '1.5rem' }}>Education</h3>
        <div className="edu-grid">
          {education.map((item, i) => (
            <div key={i} className="edu-card">
              <h4>{item.degree}</h4>
              <p>{item.school} — {item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
