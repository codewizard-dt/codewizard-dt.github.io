import { Link, useNavigate } from "react-router-dom"
import { Card, Image, Label, Popup } from "semantic-ui-react"
import CardImage from "../CardImage"

const ProjectListItem = ({ project, active, onClick }) => {
  const {
    name,
    description,
    repoUrl,
    deployedUrl,
    cardImageUrl,
    cardImagePos,
    host,
    packages,
    skills,
    collaborative,
  } = project
  const navigate = useNavigate()
  const renderMeta = () => {
    if (host) return <Card.Meta>Deployed - {host}</Card.Meta>
  }
  const renderBadge = () => {
    if (collaborative) return <Popup content='Collaborative Project' trigger={<Label corner='right' size="big" color="yellow" icon="users" />} />
  }

  return (
    <Card onClick={() => navigate(`/projects/${project.slug}`)} >
      {cardImageUrl && <CardImage src={cardImageUrl} pos={cardImagePos} />}
      {renderBadge()}
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