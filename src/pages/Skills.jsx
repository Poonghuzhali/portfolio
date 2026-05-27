import './Skills.css'

const skills = [
  { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Next.js', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma', 'Webpack', 'Vite'] },
  { category: 'Soft Skills', items: ['Communication', 'Teamwork', 'Problem Solving', 'Time Management', 'Adaptability'] },
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
