import { education } from '../data/projects'

function Education() {
  return (
    <section className="section" id="education">
      <h2 className="section__title">Education</h2>

      <div className="education-grid">
        {education.map((edu) => (
          <div className="education-card" key={edu.qualification}>
            <h3 className="education-card__qualification">{edu.qualification}</h3>
            <p className="education-card__institution">{edu.institution}</p>
            <p className="education-card__period">{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
