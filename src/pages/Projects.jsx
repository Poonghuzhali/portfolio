import './Projects.css'

const projects = [
  {
    title: 'Billing App',
    desc: 'A billing application built with JavaScript for retail billing and invoice management.',
    tags: ['JavaScript', 'Billing', 'UI'],
    link: 'https://poonghuzhali.github.io/Billing-App/',
    color: '#6c5ce7',
  },
  {
    title: 'Retail Flow Billing',
    desc: 'Retail flow billing system for streamlined point-of-sale operations.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://poonghuzhali.github.io/retailflowbilling/',
    color: '#00b894',
  },
  {
    title: 'Day 30 React',
    desc: 'A 30-day React practice project exploring components, hooks, and state management.',
    tags: ['React', 'JavaScript', 'Vite'],
    link: 'https://poonghuzhali.github.io/day30react/',
    color: '#0984e3',
  },
  {
    title: 'Inventory Management',
    desc: 'Inventory tracking system for managing stock, orders, and product data.',
    tags: ['JavaScript', 'CRUD', 'Dashboard'],
    link: 'https://poonghuzhali.github.io/inventory/',
    color: '#e17055',
  },
  {
    title: 'Cosmetics Website',
    desc: 'A responsive e-commerce style website for a cosmetics brand.',
    tags: ['HTML', 'CSS', 'Responsive'],
    link: 'https://poonghuzhali.github.io/cosmetics_website/',
    color: '#fd79a8',
  },
  {
    title: 'Vegan Restaurant',
    desc: 'A restaurant website showcasing menu, location, and brand identity for a vegan eatery.',
    tags: ['HTML', 'CSS', 'UI Design'],
    link: 'https://poonghuzhali.github.io/veganrestaurant/',
    color: '#00cec9',
  },
  {
    title: 'SR Tech',
    desc: 'A technology services landing page with modern design and layout.',
    tags: ['HTML', 'CSS', 'Landing Page'],
    link: 'https://poonghuzhali.github.io/srtech/',
    color: '#636e72',
  },
  {
    title: 'Toys Shop',
    desc: 'An online toy storefront with product listings and shopping cart interface.',
    tags: ['HTML', 'CSS', 'E-commerce'],
    link: 'https://poonghuzhali.github.io/toysshop/',
    color: '#e84393',
  },
]

export default function Projects() {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built — click to view live</p>

        <div className="projects-grid">
          {projects.map(p => (
            <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" className="project-card" style={{ '--accent-color': p.color }}>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
