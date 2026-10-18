import { personalInfo } from '../data/projects'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social">
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
      <p className="footer__text">
        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a> · {personalInfo.location}
      </p>
      <p className="footer__copyright">&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
    </footer>
  )
}

export default Footer
