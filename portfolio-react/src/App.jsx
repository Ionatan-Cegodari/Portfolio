import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import ProjectSection from './components/ProjectSection'
import Education from './components/Education'
import Footer from './components/Footer'
import { sections } from './data/projects'

function App() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <About />
        <Experience />
        <Skills />
        {sections.map((section) => (
          <ProjectSection key={section.id} section={section} />
        ))}
        <Education />
      </main>
      <Footer />
    </>
  )
}

export default App
