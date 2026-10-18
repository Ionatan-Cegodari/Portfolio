import { TypeAnimation } from 'react-type-animation'
import { personalInfo } from '../data/projects'

function Header() {
  return (
    <header className="header">
      <img src="/assets/profile.jpg" alt={personalInfo.name} className="header__avatar" />
      <h1 className="header__name">{personalInfo.name}</h1>
      <div className="header__title">
        <TypeAnimation
          sequence={personalInfo.roles}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>
      <p className="header__meta">
        {personalInfo.location} · <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
      </p>
      <div className="header__actions">
        <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Download CV
        </a>
        <div className="header__social">
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <img src="/assets/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <img src="/assets/github.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
