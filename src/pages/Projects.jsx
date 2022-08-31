import Banner from "../components/Banner";
import ProjectList from '../components/Project/ProjectList';

function sortByCollab(project1, project2) {
  if (project1.collaborative && !project2.collaborative) return -1
  if (!project1.collaborative && project2.collaborative) return 1
  if (project1.collaborative && project2.collaborative) return 0
}

function Projects({ projects }) {
  return (
    <>
      <Banner bgImgSrc="/images/analytics.jpeg" roundedImgSrc='/images/avatar.jpg' caption='Coding Projects' />
      <ProjectList projects={projects.sort(sortByCollab)} />
    </>
  )
}

export default Projects
