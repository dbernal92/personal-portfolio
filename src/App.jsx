import Header from './components/Header'
import AboutMe from '../sections/AboutMe'
import Contact from '../sections/Contact'
import Experience from '../sections/Experience'
import Summary from '../sections/Summary'
import TechSkills from "../sections/TechSkills"
import Education from "../sections/Education"
import Projects from "../sections/Projects"
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div id="about-me">
        <AboutMe />
        <Summary />
        <Contact />
      </div>
      <div id="top-card-section">
        <TechSkills />
        <Education />
        <Projects />
      </div>
      <div id="middle-card-section">
        
        
      </div>
      <div id="bottom-card-section">
        <Experience />
      </div>
    </>
  )
}

export default App
