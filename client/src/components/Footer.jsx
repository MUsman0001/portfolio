import { Link } from 'react-router-dom'
import { IconGithub, IconLinkedin, IconMail, IconDownload, IconArrowRight } from './Icons'
import { EMAIL, GITHUB_URL, LINKEDIN_URL, CV_PATH } from '../data/site'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-title">
              <span className="live-indicator" />
              <span>Muhammad Usman</span>
            </div>
            <p className="footer-brand-desc">
              Computer Science graduate focused on cybersecurity, DevSecOps, and applied AI.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <span className="footer-col-title">Navigation</span>
              <Link to="/">Overview</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/about">About & Stack</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-col">
              <span className="footer-col-title">Connect</span>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <IconGithub size={14} />
                <span>GitHub</span>
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <IconLinkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <a href={`mailto:${EMAIL}`}>
                <IconMail size={14} />
                <span>Direct Email</span>
              </a>
              <a href={CV_PATH} download>
                <IconDownload size={14} />
                <span>Download CV</span>
              </a>
              <Link to="/contact">
                <IconArrowRight size={14} />
                <span>Send Message</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Muhammad Usman. Built with React & Vite. All rights reserved.
          </p>
          <div className="footer-status-pill">
            <span className="footer-status-dot" />
            <span>Open to MS Cybersecurity programs</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
