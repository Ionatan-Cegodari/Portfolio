import { skillGroups } from '../data/projects'

function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section__title">Technical Skills</h2>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3 className="skill-group__title">{group.title}</h3>
            <div className="skill-pills">
              {group.skills.map((skill) => (
                <span className="skill-pill" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
