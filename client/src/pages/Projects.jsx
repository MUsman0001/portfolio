import { useState, useMemo, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import {
  IconShield,
  IconCpu,
  IconServer,
  IconCheckCircle,
  IconExternalLink,
  IconGithub,
  IconActivity,
  IconLock,
  IconArrowRight,
  IconCode
} from '../components/Icons'
import './Projects.css'

const CATEGORIES = ['All', 'Cybersecurity', 'AI / ML', 'Data Systems', 'Systems']

function getTrackIcon(track) {
  switch (track) {
    case 'Cybersecurity':
      return <IconShield size={14} />
    case 'AI / ML':
      return <IconCpu size={14} />
    case 'Data Systems':
      return <IconServer size={14} />
    case 'Systems':
      return <IconCode size={14} />
    default:
      return <IconActivity size={14} />
  }
}

function getTrackBadgeClass(track) {
  switch (track) {
    case 'Cybersecurity':
      return 'badge-emerald'
    case 'AI / ML':
      return 'badge-cyan'
    case 'Data Systems':
      return 'badge-indigo'
    case 'Systems':
      return 'badge-purple'
    default:
      return ''
  }
}

function Projects() {
  const { hash } = useLocation()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.track === selectedCategory
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.client && p.client.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  useEffect(() => {
    if (!hash) return
    setSelectedCategory('All')
    const id = hash.slice(1)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        el.classList.add('project-highlight')
        setTimeout(() => el.classList.remove('project-highlight'), 2000)
      }
    }, 150)
  }, [hash])

  return (
    <div className="page projects-page">
      <header className="section-header">
        <span className="section-tag">Projects</span>
        <h1 className="section-title">Selected Projects</h1>
        <p className="section-desc">
          Airline systems, monitoring pipelines, and applied machine learning —
          with outcomes stated as they are.
        </p>
      </header>

      <div className="projects-toolbar">
        <div className="filter-pills">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              <span>{cat}</span>
            </button>
          ))}
        </div>

        <div className="search-input-wrap">
          <input
            type="text"
            placeholder="Search stack, client or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="projects-container-grid">
        {filteredProjects.map((project) => (
          <article
            id={project.id}
            key={project.id}
            className={`project-detail-card glass-panel ${project.featured ? 'is-featured' : ''}`}
          >
            <div className="card-top-bar">
              <div className="track-badges">
                <span className={`badge ${getTrackBadgeClass(project.track)}`}>
                  {getTrackIcon(project.track)}
                  <span>{project.track}</span>
                </span>
                {project.isPrivate && (
                  <span className="badge badge-private">
                    <IconLock size={11} />
                    <span>NDA</span>
                  </span>
                )}
              </div>
              <span className="proj-id-badge">#{project.no}</span>
            </div>

            <h2 className="project-heading">{project.title}</h2>
            <div className="project-client-meta">
              <span className="client-name">{project.client}</span>
              <span className="meta-sep">·</span>
              <span className="platform-name">{project.platform}</span>
            </div>
            <p className="project-lead">{project.tagline}</p>
            <p className="project-body">{project.description}</p>

            <div className="meta-box method-box">
              <span className="meta-label">Architecture &amp; Implementation</span>
              <p>{project.method}</p>
            </div>

            <div className="meta-box result-box">
              <span className="meta-label">
                <IconCheckCircle size={13} />
                Outcome
              </span>
              <p>{project.result}</p>
            </div>

            <div className="project-stack">
              {project.tags.map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>

            {(project.isPrivate || project.githubUrl) && (
              <div className="card-actions">
                {project.isPrivate ? (
                  <div className="private-action-wrap">
                    <span className="private-note">
                      <IconLock size={13} />
                      <span>Proprietary source under NDA</span>
                    </span>
                    <Link to="/contact" className="btn btn-secondary btn-sm">
                      <span>Inquire Architecture</span>
                      <IconArrowRight size={13} />
                    </Link>
                  </div>
                ) : (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <IconGithub size={14} />
                    <span>View Source Repository</span>
                    <IconExternalLink size={12} />
                  </a>
                )}
              </div>
            )}
          </article>
        ))}

        {filteredProjects.length === 0 && (
          <div className="no-projects-found glass-panel">
            <p>No projects match your search criteria.</p>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setSelectedCategory('All')
                setSearchQuery('')
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
