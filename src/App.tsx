import HomePage from './components/pages/HomePage'
import ExperiencePage from './components/pages/ExperiencePage'
import './App.css'
import Navbar from './components/UI/organisms/Navbar'
import { Routes, Route } from 'react-router'
import ProjectsPage from './components/pages/ProjectsPage'
import ContactPage from './components/pages/ContactPage'

function App() {
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
