import Header from './components/Header'
import Card from './components/Card'
import Contact from '../sections/Contact'
import Experience from '../sections/Experience'
import TechSkills from "../sections/TechSkills"
import Education from "../sections/Education"
import Projects from "../sections/Projects"
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div id="about-me">
        <Card title="About Me" />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="top-card-section">

        <TechSkills />
        <Education />
      </div>
      <div id="middle-card-section">
        <Projects />
      </div>
      <div id="bottom-card-section">
        <Experience />
      </div>
      <Projects />
    </>
  )
}

export default App
