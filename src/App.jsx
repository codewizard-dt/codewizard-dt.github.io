import React from 'react'
import Home from './pages/Home'
import './App.sass'
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
        <Container>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="projects" element={<Home projects={projects} />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resume" element={<Resume />} />
            <Route path="projects/:name" element={<Project projects={projects} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </Container>
  )
}

export default App