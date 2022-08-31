import React from 'react'
import Projects from './pages/Projects'
import './App.sass'
import './Animations.sass'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Project from './pages/Project'
import projects from './data/projects';
import { Container } from 'semantic-ui-react'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer'

function App() {
  return (
    <Container>
      <BrowserRouter>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="projects" element={<Projects projects={projects} />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resume" element={<Resume projects={projects} />} />
            <Route path="projects/:name" element={<Project projects={projects} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Container>
  )
}

export default App