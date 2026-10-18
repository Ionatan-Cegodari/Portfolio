import { Tilt } from 'react-tilt'

const tiltOptions = {
  max: 15,
  scale: 1.02,
  speed: 400,
  glare: true,
  'max-glare': 0.2,
}

function ProjectCard({ title, image, link }) {
  return (
    <Tilt options={tiltOptions} className="tilt-wrapper">
      <article className="project-card">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link"
        >
          <div className="project-card__image-container">
            <img
              src={`/assets/${image}`}
              alt={title}
              className="project-card__image"
            />
            <div className="project-card__overlay">
              <h3 className="project-card__title">{title}</h3>
            </div>
          </div>
        </a>
      </article>
    </Tilt>
  )
}

export default ProjectCard
