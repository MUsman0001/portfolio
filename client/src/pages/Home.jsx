import { Link } from 'react-router-dom'
import {
  IconShield,
  IconCpu,
  IconServer,
  IconArrowRight,
  IconCheckCircle,
  IconGithub,
  IconExternalLink,
  IconDownload
} from '../components/Icons'
import { projects } from '../data/projects'
import { EMAIL, GITHUB_URL, CV_PATH } from '../data/site'
import './Home.css'

const PROFILE_ROWS = [
  { label: 'Degree', value: 'BS Computer Science, Air University Islamabad (2026)' },
  { label: 'Current role', value: 'DevOps Intern, Business Analytics (Pvt) Ltd' },
  { label: 'FYP lead', value: 'AeroCrew Flow — crew operations system for PIA' },
  {
    label: 'Certification',
    value: 'Google Cloud Cybersecurity Certificate',
    href: 'https://www.coursera.org/account/accomplishments/professional-cert/BTMIIXUUF46X'
  },
  { label: 'Focus', value: 'Security engineering, CI/CD security, and applied AI' }
]

function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <div className="status-badge-wrap">
            <div className="badge badge-emerald">
              <span className="live-indicator" />
              <span>Open to graduate study</span>
            </div>
          </div>

          <h1 className="hero-title">
            Building <span className="text-gradient-cyan">secure systems</span> and{' '}
            <span className="text-gradient-emerald">AI you can trust</span>.
          </h1>

          <p className="hero-description">
            I’m a Computer Science graduate from Air University Islamabad (2026).
            I led our final-year project, a crew management system built with PIA,
            and I’m now a DevOps intern working on CI/CD pipelines with security
            scanning. I also build deep learning projects, including a deepfake
            video detector.
          </p>

          <div className="hero-cta-group">
            <Link to="/projects" className="btn btn-primary">
              <span>View Selected Projects</span>
              <IconArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <span>Get in Touch</span>
            </Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <IconGithub size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <aside className="hero-summary glass-panel" aria-label="Academic and engineering summary">
          <div className="summary-header">
            <span className="summary-kicker">At a glance</span>
            <span className="summary-location">Islamabad, PK</span>
          </div>

          <dl className="summary-list">
            {PROFILE_ROWS.map((row) => (
              <div key={row.label} className="summary-row">
                <dt>{row.label}</dt>
                <dd>
                  {row.href ? (
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="summary-link"
                    >
                      <span>{row.value}</span>
                      <IconExternalLink size={12} />
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="summary-footer">
            <Link to="/experience" className="summary-footer-link">
              <span>Experience &amp; internships</span>
              <IconArrowRight size={14} />
            </Link>
            <a href={CV_PATH} download className="summary-footer-link">
              <IconDownload size={14} />
              <span>CV (PDF)</span>
            </a>
          </div>
        </aside>
      </section>

      <section className="pillars-section">
        <div className="section-header">
          <span className="section-tag">Areas of work</span>
          <h2 className="section-title">What I focus on</h2>
          <p className="section-desc">
            Security engineering, log monitoring, and applied machine learning.
          </p>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card glass-panel card-cyan">
            <div className="pillar-icon-box">
              <IconShield size={22} />
            </div>
            <h3>Secure Engineering</h3>
            <p>
              Role-based access, API security fixes, and a CI/CD pipeline that scans code and
              container images, then deploys and rolls back automatically.
            </p>
            <div className="pillar-tags">
              <span className="badge">RBAC</span>
              <span className="badge">API Security</span>
              <span className="badge">SonarQube</span>
              <span className="badge">Trivy</span>
            </div>
          </div>

          <div className="pillar-card glass-panel card-emerald">
            <div className="pillar-icon-box">
              <IconServer size={22} />
            </div>
            <h3>Detection and Monitoring</h3>
            <p>
              A log pipeline that collects, stores, and raises alerts on unusual
              activity using statistical anomaly detection.
            </p>
            <div className="pillar-tags">
              <span className="badge">Redis</span>
              <span className="badge">Z-score alerts</span>
              <span className="badge">FastAPI</span>
              <span className="badge">WebSocket</span>
            </div>
          </div>

          <div className="pillar-card glass-panel card-indigo">
            <div className="pillar-icon-box">
              <IconCpu size={22} />
            </div>
            <h3>Applied AI</h3>
            <p>
              Deep learning for video and image classification, and a reinforcement
              learning game agent.
            </p>
            <div className="pillar-tags">
              <span className="badge">PyTorch</span>
              <span className="badge">EfficientNet</span>
              <span className="badge">CNNs</span>
              <span className="badge">Q-learning</span>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-header-split">
          <div className="section-header">
            <span className="section-tag">Work</span>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-desc">
              Airline operations, log monitoring, and a deepfake video detector with reported metrics.
            </p>
          </div>
          <Link to="/projects" className="btn btn-secondary">
            <span>View All Projects</span>
            <IconArrowRight size={15} />
          </Link>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-card glass-panel">
              <div className="project-card-header">
                <span className="badge badge-cyan">{project.track}</span>
                <span className="project-index">#{project.no}</span>
              </div>

              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>
              <p className="project-desc">{project.description}</p>

              <div className="project-result-box">
                <IconCheckCircle size={15} />
                <p><strong>Outcome:</strong> {project.result}</p>
              </div>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="badge">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-card-footer">
                <Link to={`/projects#${project.id}`} className="project-link">
                  <span>View details</span>
                  <IconArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section glass-panel">
        <div className="cta-content">
          <div className="badge badge-emerald">
            <span>Master’s applications</span>
          </div>
          <h2>Looking for a place in cybersecurity.</h2>
          <p>
            I’m looking for a master’s place in cybersecurity, with an interest
            in security engineering and AI-based detection. Email me or download my CV.
          </p>
          <div className="cta-actions">
            <a href={`mailto:${EMAIL}`} className="btn btn-primary">
              <span>{EMAIL}</span>
            </a>
            <a href={CV_PATH} download className="btn btn-secondary">
              <IconDownload size={15} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
