import { experience } from '../data/projects'

function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section__title">Professional Experience</h2>

      <div className="timeline">
        {experience.map((job) => (
          <article className="timeline__item" key={`${job.company}-${job.role}-${job.period}`}>
            <div className="timeline__marker" />
            <div className="timeline__card">
              <div className="timeline__card-header">
                <h3 className="timeline__role">{job.role}</h3>
                <span className="timeline__period">{job.period}</span>
              </div>
              <div className="timeline__meta">
                <span className="timeline__company">{job.company}</span>
                <span className="timeline__dot">•</span>
                <span>{job.location}</span>
                <span className="timeline__mode">{job.mode}</span>
              </div>
              <ul className="timeline__points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
