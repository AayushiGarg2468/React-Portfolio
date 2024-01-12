import SideBar from "./Components/SIdeBar/SideBar"
import HomePage from './Components/HomePage/HomePage';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import './App.css'

const App = () => {
  return (
    <div>
      <SideBar/>
      <main className="main">
        <HomePage />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App
