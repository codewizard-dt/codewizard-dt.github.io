import { Container, Header } from "semantic-ui-react"
import NavBar from "../components/NavBar"
import ProjectList from '../components/Project/ProjectList';

function sortByCollab(project1, project2) {
  if (project1.collaborative && !project2.collaborative) return -1
  if (!project1.collaborative && project2.collaborative) return 1
  if (project1.collaborative && project2.collaborative) return 0
}

function Home({ projects }) {
  return (
    <Container>
      <Header as='h1'>Projects</Header>
      <ProjectList projects={projects.sort(sortByCollab)} />
    </Container>
  )
}

export default Home
