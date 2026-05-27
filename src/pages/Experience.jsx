import './Experience.css'

const experience = [
  {
    role: 'Junior Python Developer (Intern)',
    company: 'Vetri IT Solutions',
    period: 'Jan 2026 — May 2026',
    desc: 'Worked on real-world web applications using Python, Django, and frontend technologies. Gained hands-on experience in full-stack development and project delivery.',
  },
  {
    role: 'Senior Executive — Data Analyst',
    company: 'Flipkart',
    period: 'Aug 2018 — Apr 2023',
    desc: 'Led data analysis initiatives, created dashboards and reports, and provided actionable insights to drive business decisions in a fast-paced e-commerce environment.',
  },
  {
    role: 'Data Analyst',
    company: 'HCL Technologies',
    period: 'Feb 2013 — Nov 2014',
    desc: 'Performed data analysis, reporting, and process optimization for client projects. Developed analytical models to support business operations.',
  },
]

const education = [
  { degree: 'B.E. Electronics & Communication Engineering', school: 'University', year: '2012' },
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
