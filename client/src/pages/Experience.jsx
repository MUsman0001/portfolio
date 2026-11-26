import { IconBriefcase, IconCheckCircle } from '../components/Icons'
import './Experience.css'

const ROLES = [
  {
    id: 'business-analytics',
    period: 'Sep 2026 — Present',
    status: 'Latest',
    role: 'DevOps Intern',
    company: 'Business Analytics (Pvt) Ltd',
    location: 'Islamabad',
    tagline: 'Building CI/CD pipelines with security checks built in.',
    achievements: [
      'Built CI/CD pipelines on Jenkins (separate Ubuntu agent) and on a self-hosted GitLab runner (GitLab CI/CD).',
      'Both pipelines run SonarQube analysis (.NET), Docker build, Trivy image scan, emailed report, manual approval, and production deployment. Trivy reports are saved as artifacts.',
      'Completed 3+ production deployments: first deployed manually on the company server to verify the setup, then integrated the process into the CI/CD pipeline with automated triggers and rollback.',
      'Used Nginx as a reverse proxy for deployment, routing traffic to the containerized applications.',
      'Added automatic rollback: a health check after deploy returns to the previous Docker image if the new build fails. Three image backups are kept (latest, old 1, old 2), and they update automatically after each deploy.',
      'Used Git for version control (branching, merging, rollbacks) on self-hosted GitLab and GitHub, and set up SSH keys for Jenkins.',
      'Moved .NET apps to Docker on Linux and fixed a Windows-only file path and a missing CORS policy.',
      'Ran Liferay with Elasticsearch and PostgreSQL in Docker, then set up a 2-node Liferay cluster sharing one database, and tested that it worked across both nodes.',
      'Ran applications on a Kubernetes cluster using Minikube, and wrote backup and restore scripts for the database.',
      'Used NFS for shared storage, and Ansible to install packages and prepare machines.'
    ],
    tags: ['Jenkins', 'GitLab CI', 'Docker', 'SonarQube', 'Trivy', 'Nginx', 'Kubernetes (Minikube)', 'Ansible', 'Liferay']
  },
  {
    id: 'pia',
    period: 'Jul 2025 — Sep 2025',
    status: 'Flagship',
    role: 'Software Engineering Intern (Final Year Project)',
    company: 'Pakistan International Airlines',
    location: 'Booking Office, Islamabad',
    tagline: 'Led the team that built AeroCrew Flow, a crew management system for an airline.',
    achievements: [
      'Led a team building a crew management system with a Laravel web app and a Flutter mobile app, covering rosters, conflict-aware assignments, and role-based access control.',
      'Added qualification and conflict checks to reduce scheduling errors, and validation for flight-schedule imports.',
      'Secured the mobile API with authentication and fixed common OWASP issues such as broken access control and SQL injection.',
      'Built real-time text messaging over sockets, with an access check on every connection, and deployed on Ubuntu.'
    ],
    tags: ['Laravel', 'Flutter', 'MySQL', 'Sockets', 'RBAC', 'MFA', 'OWASP']
  },
  {
    id: 'fiverr',
    period: '2024 — Present',
    status: 'Completed',
    role: 'Freelance Full-Stack Developer',
    company: 'Fiverr',
    location: 'Remote',
    tagline: 'Delivered web and mobile projects for international clients.',
    achievements: [
      'Completed 7 orders for 2 international clients, deployed on AWS.',
      'Fixed security issues in older code before handover.'
    ],
    tags: ['Full-Stack', 'AWS', 'Web', 'Mobile']
  }
]

function Experience() {
  return (
    <div className="page experience-page">
      <header className="section-header">
        <span className="section-tag">
          <IconBriefcase size={14} />
          Career &amp; Engineering Track
        </span>
        <h1 className="section-title">Experience</h1>
        <p className="section-desc">
          DevOps internships, a final-year airline system, and freelance delivery.
        </p>
      </header>

      <div className="timeline-container">
        {ROLES.map((role, idx) => (
          <div key={role.id} className="timeline-item">
            <div className="timeline-meta">
              <span className="timeline-period">{role.period}</span>
              <span className="timeline-badge badge badge-cyan">{role.status}</span>
            </div>

            <div className="timeline-axis">
              <div className="axis-node">
                <span className="node-inner" />
              </div>
              {idx !== ROLES.length - 1 && <div className="axis-line" />}
            </div>

            <div className="timeline-content-card glass-panel">
              <div className="card-header-row">
                <div>
                  <h2 className="role-title">{role.role}</h2>
                  <div className="company-info">
                    <span className="company-name">{role.company}</span>
                    <span className="company-dot" />
                    <span className="company-loc">{role.location}</span>
                  </div>
                </div>
              </div>

              <p className="role-tagline">{role.tagline}</p>

              <div className="achievements-list">
                {role.achievements.map((item, aIdx) => (
                  <div key={aIdx} className="achievement-item">
                    <IconCheckCircle size={15} className="achieve-check" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className="role-tags">
                {role.tags.map((tag) => (
                  <span key={tag} className="badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
