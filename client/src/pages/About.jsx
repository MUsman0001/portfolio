import { Link } from 'react-router-dom'
import {
  IconShield,
  IconCpu,
  IconServer,
  IconCode,
  IconCheckCircle,
  IconArrowRight,
  IconLayers,
  IconDownload
} from '../components/Icons'
import { CV_PATH } from '../data/site'
import './About.css'

const SKILL_DOMAINS = [
  {
    title: 'Security and DevSecOps',
    badge: 'badge-emerald',
    icon: <IconShield size={18} />,
    desc: 'Scanning, access control, and pipelines that run before deploy.',
    skills: [
      'Trivy',
      'SonarQube',
      'Jenkins',
      'GitLab CI',
      'Docker',
      'RBAC',
      'OWASP basics',
      'Linux'
    ]
  },
  {
    title: 'AI/ML',
    badge: 'badge-cyan',
    icon: <IconCpu size={18} />,
    desc: 'Classification, computer vision, and a reinforcement-learning agent.',
    skills: [
      'PyTorch',
      'TensorFlow/Keras',
      'scikit-learn',
      'OpenCV',
      'Q-learning'
    ]
  },
  {
    title: 'Systems and Backend',
    badge: 'badge-indigo',
    icon: <IconServer size={18} />,
    desc: 'APIs, data stores, and systems programming.',
    skills: [
      'Laravel',
      'FastAPI',
      'Redis',
      'MySQL',
      'SQLite',
      'C++',
      'Socket programming'
    ]
  },
  {
    title: 'Tools and Cloud',
    badge: 'badge-purple',
    icon: <IconCode size={18} />,
    desc: 'Delivery tools used in internships and freelance work.',
    skills: [
      'Git',
      'Kubernetes (Minikube)',
      'Ansible (basic)',
      'Flutter',
      'AWS (freelance)'
    ]
  }
]

function About() {
  return (
    <div className="page about-page">
      <header className="section-header">
        <span className="section-tag">
          <IconLayers size={14} />
          Profile
        </span>
        <h1 className="section-title">About me</h1>
        <p className="section-desc">
          Computer Science graduate applying for a master’s in cybersecurity.
        </p>
      </header>

      <div className="about-overview-grid">
        <div className="bio-card glass-panel">
          <div className="bio-intro">
            <h2>Background</h2>
            <p>
              I studied Computer Science at Air University Islamabad and graduated
              in 2026. I’m interested in cybersecurity, especially where it meets
              machine learning.
            </p>
            <p>
              My final-year project, AeroCrew Flow, was a crew management system
              for PIA, built over three semesters. I led the team. Alongside it I
              built a distributed log monitoring platform, a deepfake detector,
              and other projects in AI and systems.
            </p>
            <p>
              I’m currently a DevOps intern, building pipelines that scan code
              and container images before deployment. I also completed the Google
              Cloud Cybersecurity Certificate. I’m applying for a master’s to go
              deeper into security engineering and AI-based detection.
            </p>
          </div>

          <div className="bio-actions">
            <Link to="/contact" className="btn btn-primary">
              <span>Contact Me</span>
              <IconArrowRight size={15} />
            </Link>
            <a href={CV_PATH} download className="btn btn-secondary">
              <IconDownload size={15} />
              <span>Download CV</span>
            </a>
            <Link to="/projects" className="btn btn-secondary">
              <span>View Projects</span>
            </Link>
          </div>
        </div>

        <div className="stats-column">
          <div className="stat-card glass-panel">
            <span className="stat-num">BSCS</span>
            <span className="stat-title">BS Computer Science</span>
            <span className="stat-sub">Air University Islamabad, 2026</span>
          </div>

          <div className="stat-card glass-panel">
            <span className="stat-num">3</span>
            <span className="stat-title">Roles</span>
            <span className="stat-sub">PIA, DevOps intern, freelance</span>
          </div>

          <div className="stat-card glass-panel">
            <span className="stat-num">Now</span>
            <span className="stat-title">DevOps Intern</span>
            <span className="stat-sub">Business Analytics (Pvt) Ltd</span>
          </div>

          <div className="stat-card glass-panel stat-highlight">
            <span className="stat-num">GCP</span>
            <span className="stat-title">Google Cloud Cybersecurity Certified</span>
            <span className="stat-sub">Professional Certificate, Coursera</span>
          </div>
        </div>
      </div>

      <section className="principles-section">
        <div className="section-header">
          <span className="section-tag">
            <IconCheckCircle size={14} />
            Guiding Philosophy
          </span>
          <h2 className="section-title">Principles</h2>
        </div>

        <div className="principles-grid">
          <div className="principle-card glass-panel">
            <span className="principle-idx">01</span>
            <h3>Secure by default</h3>
            <p>
              Add access checks, validation, and scanning from the start.
            </p>
          </div>

          <div className="principle-card glass-panel">
            <span className="principle-idx">02</span>
            <h3>Automate and verify</h3>
            <p>
              Pipelines should test, scan, and roll back without manual steps.
            </p>
          </div>

          <div className="principle-card glass-panel">
            <span className="principle-idx">03</span>
            <h3>Report honestly</h3>
            <p>
              Show real results and limits, not just the best numbers.
            </p>
          </div>
        </div>
      </section>

      <section className="skills-matrix-section">
        <div className="section-header">
          <span className="section-tag">
            <IconLayers size={14} />
            Technical Matrix
          </span>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-matrix-grid">
          {SKILL_DOMAINS.map((domain) => (
            <div key={domain.title} className="skill-domain-card glass-panel">
              <div className="domain-header">
                <span className={`domain-icon ${domain.badge}`}>{domain.icon}</span>
                <div>
                  <h3>{domain.title}</h3>
                  <p className="domain-desc">{domain.desc}</p>
                </div>
              </div>
              <ul className="domain-skills-list">
                {domain.skills.map((skill) => (
                  <li key={skill}>
                    <IconCheckCircle size={14} className="check-icon" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="credentials-section">
        <div className="credentials-grid">
          <div className="credential-card glass-panel">
            <p className="section-tag">Education</p>
            <h3>BS Computer Science</h3>
            <p className="credential-meta">Air University Islamabad · Graduated 2026</p>
            <p className="credential-body">Relevant courses</p>
            <ul className="course-list">
              <li>Compiler Construction</li>
              <li>Parallel and Distributed Programming</li>
              <li>Digital Image Processing</li>
              <li>Artificial Intelligence</li>
            </ul>
          </div>

          <div className="credential-card glass-panel">
            <p className="section-tag">Certification</p>
            <h3>Google Cloud Cybersecurity Professional Certificate</h3>
            <p className="credential-meta">Google Cloud (Coursera)</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
