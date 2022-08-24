import { Link } from "react-router-dom"
import { Card, Image } from "semantic-ui-react"

const ProjectListItem = ({ project, active, onClick }) => {
  const {
    name,
    description,
    repoUrl,
    deployedUrl,
    imageUrl,
    packages,
    skills,
    collaborative,
  } = project

  const renderMeta = () => {
    if (deployedUrl) {
      let host = deployedUrl.match(/(github|heroku)/)[0]
      return <Card.Meta>Deployed - {host[0].toUpperCase() + host.slice(1)}</Card.Meta>
    }
  }

  return (
    <Card href={`/projects/${project.slug}`} >
      {imageUrl && <Image src={imageUrl} />}
      <Card.Content>
        <Card.Header>
          {name}
        </Card.Header>
        {renderMeta()}
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default ProjectListItem