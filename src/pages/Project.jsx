import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container } from "semantic-ui-react"
import Loading from "../components/Loading"

const Project = ({ projects }) => {
  const { name: nameSlug } = useParams()
  const [project, setProject] = useState(null)

  useEffect(() => {
    setProject(projects.find(proj => proj.slug === nameSlug))
  }, [nameSlug])

  if (!project) return <Loading />
  return (
    <Container>
      {project.name}
    </Container>
  )
}

export default Project