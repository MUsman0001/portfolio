import { useState } from 'react'
import {
  IconMail,
  IconGithub,
  IconLinkedin,
  IconDownload,
  IconCheck,
  IconArrowRight
} from '../components/Icons'
import { EMAIL, GITHUB_URL, LINKEDIN_URL, CV_PATH } from '../data/site'
import './Contact.css'

function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="page contact-page">
      <header className="section-header">
        <span className="section-tag">Contact</span>
        <h1 className="section-title">Get in touch</h1>
        <p className="section-desc">
          For master’s admissions, research groups, and work at the seam of
          security and automation.
        </p>
      </header>

      <div className="contact-grid">
        <div className="contact-info-col">
          <div className="info-card glass-panel">
            <div className="info-card-header">
              <span className="info-icon badge-indigo">
                <IconGithub size={18} />
              </span>
              <div>
                <h3>GitHub</h3>
                <p>Public repositories</p>
              </div>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link-btn btn btn-secondary"
            >
              <span>github.com/MUsman0001</span>
              <IconArrowRight size={14} />
            </a>
          </div>

          <div className="info-card glass-panel">
            <div className="info-card-header">
              <span className="info-icon badge-cyan">
                <IconLinkedin size={18} />
              </span>
              <div>
                <h3>LinkedIn</h3>
                <p>Profile</p>
              </div>
            </div>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link-btn btn btn-secondary"
            >
              <span>linkedin.com/in/muhammad-usman-780393264</span>
              <IconArrowRight size={14} />
            </a>
          </div>

          <div className="info-card glass-panel">
            <div className="info-card-header">
              <span className="info-icon badge-emerald">
                <IconDownload size={18} />
              </span>
              <div>
                <h3>CV</h3>
                <p>PDF download</p>
              </div>
            </div>
            <a href={CV_PATH} download className="github-link-btn btn btn-secondary">
              <span>Download CV</span>
              <IconDownload size={14} />
            </a>
          </div>
        </div>

        <div className="contact-right-col">
          <div className="contact-direct-card glass-panel">
            <div className="info-card-header">
              <span className="info-icon badge-cyan">
                <IconMail size={18} />
              </span>
              <div>
                <h2>Direct Email</h2>
                <p>Fastest way to reach me</p>
              </div>
            </div>

            <p className="direct-desc">
              Open your default email client to message me directly, or copy my
              email address below.
            </p>

            <div className="email-copy-box">
              <span className="email-text">{EMAIL}</span>
              <button
                type="button"
                className="btn btn-secondary btn-sm copy-btn"
                onClick={handleCopyEmail}
                title="Copy to clipboard"
              >
                {copied ? (
                  <>
                    <IconCheck size={14} className="copied-check" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <span>Copy</span>
                )}
              </button>
            </div>

            <a href={`mailto:${EMAIL}`} className="btn btn-primary email-cta-btn">
              <IconMail size={16} />
              <span>Email Me</span>
            </a>
          </div>

          <div className="info-card glass-panel availability-card">
            <div className="status-header">
              <span className="live-indicator" />
              <span className="status-title">Status &amp; Location</span>
            </div>
            <p className="status-text">
              Islamabad, Pakistan · Open to graduate study
            </p>
            <div className="status-pill-list">
              <span className="badge badge-emerald">Cybersecurity</span>
              <span className="badge badge-cyan">DevSecOps</span>
              <span className="badge badge-indigo">Applied AI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
