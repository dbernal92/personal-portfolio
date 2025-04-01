import cardData from "../src/data"
import Header from './components/Header'
import Card from './components/Card'
import Content from "./components/Content"
import TechSkills from "../sections/TechSkills"
import './App.css'
import Education from "../sections/Education"

function App() {

  return (
    <>
      <Header />
      <div className="top-card-section"><Card title="About Me" />
      <TechSkills />
      </div>
      <div className="bottom-card-section">
      <Education />
      <Card title="Contact" />
      </div>
    </>
  )
}

export default App
