import React from 'react'
import Home from './pages/Home'
import './App.sass'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Project from './pages/Project'
import projects from './data/projects';
import { Container } from 'semantic-ui-react'
import NavBar from './components/NavBar'

function App() {
  return (
    <Container>
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home projects={projects} />} />
              <Route path="projects/:name" element={<Project projects={projects} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </Container>
  )
}

export default App