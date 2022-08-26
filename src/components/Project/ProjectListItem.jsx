import { Link } from "react-router-dom"
import { Card, Image, Label, Popup } from "semantic-ui-react"
import CardImage from "../CardImage"

const ProjectListItem = ({ project, active, onClick }) => {
  const {
    name,
    description,
    repoUrl,
    deployedUrl,
    imageUrl,
    imagePos,
    host,
    packages,
    skills,
    collaborative,
  } = project

  const renderMeta = () => {
    if (host) return <Card.Meta>Deployed - {host}</Card.Meta>
  }
  const renderBadge = () => {
    if (collaborative) return <Popup content='Collaborative Project' trigger={<Label corner='right' color="yellow" icon="users" />} />
  }

  return (
    <Card href={`/projects/${project.slug}`} >
      {renderBadge()}
      {imageUrl && <CardImage src={imageUrl} pos={imagePos} />}
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