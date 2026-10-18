import SkillBadge from './SkillBadge'
import ProjectCard from './ProjectCard'

function ProjectSection({ section }) {
  return (
    <section className="section" id={section.id}>
      <h2 className="section__title">{section.title}</h2>

      <div className="skills">
        <span className="skills__title">Skills</span>
        {section.skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} image={skill.image} />
        ))}
      </div>

      <div className="projects-grid">
        {section.projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
