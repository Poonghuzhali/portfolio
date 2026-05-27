import './Skills.css'

const skills = [
  { category: 'Frontend', items: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'React JS', 'Figma'] },
  { category: 'Backend', items: ['Python', 'Django', 'MySQL', 'AWS (EC2)'] },
  { category: 'Tools & AI', items: ['Git', 'GitHub', 'Copilot', 'Jenkins', 'Claude AI', 'Gemini', 'Deepseek'] },
  { category: 'Data & Analytics', items: ['Data Analysis', 'Excel', 'SQL', 'Reporting', 'Dashboarding'] },
]

export default function Skills() {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="skills-grid">
          {skills.map(group => (
            <div key={group.category} className="skill-group">
              <h3 className="skill-category">{group.category}</h3>
              <div className="skill-tags">
                {group.items.map(item => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
