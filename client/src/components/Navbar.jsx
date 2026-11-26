import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { IconGithub, IconLinkedin, IconDownload, IconArrowRight } from './Icons'
import { GITHUB_URL, LINKEDIN_URL, CV_PATH } from '../data/site'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Overview', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <header className={`nav-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <div className="brand-badge">
            <span className="brand-code">MU</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">Muhammad Usman</span>
            <span className="brand-role">Cybersecurity · DevSecOps · AI</span>
          </div>
        </Link>

        <nav className="nav-menu desktop-only">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions desktop-only">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="action-icon-btn"
            title="GitHub"
          >
            <IconGithub size={17} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="action-icon-btn"
            title="LinkedIn"
          >
            <IconLinkedin size={17} />
          </a>
          <a href={CV_PATH} download className="btn btn-secondary btn-sm">
            <IconDownload size={14} />
            <span>Download CV</span>
          </a>
          <Link to="/contact" className="btn btn-accent btn-sm">
            <span>Connect</span>
            <IconArrowRight size={14} />
          </Link>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`} />
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-drawer glass-panel">
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mobile-actions">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <IconGithub size={16} />
                <span>GitHub</span>
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <IconLinkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="mobile-actions">
              <a href={CV_PATH} download className="btn btn-secondary">
                <IconDownload size={16} />
                <span>Download CV</span>
              </a>
              <Link to="/contact" className="btn btn-primary">
                <span>Connect</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
