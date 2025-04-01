import cardData from "../src/data"
import Header from './components/Header'
import Card from './components/Card'
import Content from "./components/Content"
import TechSkills from "../sections/TechSkills"
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Card title="About Me" />
      <TechSkills />
      <Card title="Education" />
      <Card title="Contact" />
    </>
  )
}

export default App
