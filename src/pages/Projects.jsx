import { useState } from 'react'
import useOnScreen from '../hooks/useOnScreen'
import './Projects.css'

const projects = [
  {
    title: 'Billing App',
    desc: 'A billing application built with JavaScript for retail billing and invoice management.',
    tags: ['JavaScript', 'React', 'UI'],
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

function ProjectThumb({ project }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div className="project-thumb" style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}88)` }}>
      {!failed && (
        <img
          src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(project.link)}?w=600`}
          alt={project.title}
          className={`project-thumb-img ${loaded ? 'loaded' : ''}`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          loading="lazy"
        />
      )}
      {(!loaded || failed) && (
        <span className="project-thumb-icon">{project.title[0]}</span>
      )}
    </div>
  )
}

export default function Projects() {
  const [ref, visible] = useOnScreen()

  return (
    <section>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built — click to view live</p>

        <div className="projects-grid" ref={ref}>
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s`, '--accent-color': p.color }}
            >
              <ProjectThumb project={p} />
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
