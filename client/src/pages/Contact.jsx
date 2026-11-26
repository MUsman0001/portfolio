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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Admissions or Research',
    message: ''
  })
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`
    window.location.href = href
    setStatus({
      state: 'success',
      message: 'Your email app should open with this message. If it does not, copy the address on the left.'
    })
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
              <span className="info-icon badge-cyan">
                <IconMail size={18} />
              </span>
              <div>
                <h3>Direct Email</h3>
                <p>Fastest way to reach me</p>
              </div>
            </div>

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
          </div>

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

        <div className="contact-form-col glass-panel">
          <div className="form-header">
            <h2>Send a message</h2>
            <p>Opens your email app with this text filled in.</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@university.edu"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Discussion Topic</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input form-select"
              >
                <option value="Admissions or Research">Admissions or Research</option>
                <option value="DevSecOps">DevSecOps</option>
                <option value="AI">AI</option>
                <option value="Collaboration">Collaboration</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Programme, research group, or question..."
                value={formData.message}
                onChange={handleChange}
                className="form-input form-textarea"
              />
            </div>

            {status.message && (
              <div className={`form-status-alert alert-${status.state}`}>
                {status.message}
              </div>
            )}

            <button type="submit" className="btn btn-primary submit-btn">
              <span>Send via Email</span>
              <IconArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
