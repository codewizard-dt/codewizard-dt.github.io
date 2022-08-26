import { Container, Header } from "semantic-ui-react"
import Banner from "../components/Banner";
import ProjectList from '../components/Project/ProjectList';

function sortByCollab(project1, project2) {
  if (project1.collaborative && !project2.collaborative) return -1
  if (!project1.collaborative && project2.collaborative) return 1
  if (project1.collaborative && project2.collaborative) return 0
}

function Home({ projects }) {
  return (
    <Container>
      <Banner />
      <ProjectList projects={projects.sort(sortByCollab)} />
    </Container>
  )
}

export default Home
