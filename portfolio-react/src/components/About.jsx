import { personalInfo } from '../data/projects'

function About() {
  return (
    <section className="section about" id="about">
      <h2 className="section__title">About Me</h2>
      <p className="about__text">{personalInfo.summary}</p>
    </section>
  )
}

export default About
