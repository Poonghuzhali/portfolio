import useOnScreen from '../hooks/useOnScreen'
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
  { degree: 'B.E. Electronics & Communication Engineering', school: 'Anna University, Chennai', year: '2008 — 2012' },
]

export default function Experience() {
  const [ref, visible] = useOnScreen()

  return (
    <section>
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>

        <div className="exp-timeline" ref={ref}>
          {experience.map((item, i) => (
            <div
              key={i}
              className={`exp-card reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="exp-dot" />
              <div className="exp-content card">
                <span className="exp-period">{item.period}</span>
                <h3 className="exp-role">{item.role}</h3>
                <span className="exp-company">{item.company}</span>
                <p className="exp-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="section-title" style={{ marginTop: 56, fontSize: '1.5rem' }}>Education</h3>
        <div className="edu-grid" ref={ref}>
          {education.map((item, i) => (
            <div key={i} className={`edu-card card reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="edu-icon">BE</div>
              <div className="edu-info">
                <h4>{item.degree}</h4>
                <p className="edu-school">{item.school}</p>
                <span className="edu-year">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
