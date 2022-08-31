import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button, Container, Header, Label, List, Popup, Segment } from "semantic-ui-react"
import Banner from "../components/Banner"
import ExternalLink from "../components/ExternalLink"
import Loading from "../components/Loading"
import './Project.sass'

const Project = ({ projects }) => {
  const { name: nameSlug } = useParams()
  const [project, setProject] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    setProject(projects.find(proj => proj.slug === nameSlug))
  }, [projects, nameSlug])

  if (!project) return <Loading />

  const renderLabels = () => {
    return (
      <div className="ui labels">
        {project.deployedUrl && <ExternalLink href={project.deployedUrl}><Label content="Deployed Link" detail={project.host} /></ExternalLink>}
        <ExternalLink href={project.repoUrl}>
          <Label content={'Github Repo'} />
        </ExternalLink>
      </div>
    )
  }
  const renderNavButtons = () => {
    let i = projects.indexOf(project)
    let next = projects[i === projects.length - 1 ? 0 : i + 1]
    let prev = projects[i === 0 ? projects.length - 1 : i - 1]
    return (
      <Button.Group floated="right">
        <Popup content="Back To List" trigger={<Button onClick={() => navigate(`/projects`)} icon='list' />} />
        <Popup content={prev.name} trigger={<Button onClick={() => navigate(`/projects/${prev.slug}`)} icon="angle left" />} />
        <Popup content={next.name} trigger={<Button onClick={() => navigate(`/projects/${next.slug}`)} icon="angle right" />} />
      </Button.Group>
    )
  }

  return (
    <div id="project">
      <Banner bgImgSrc={project.pageImageUrl || project.cardImageUrl} bgImgStyle={project.pageImageStyle} caption={project.name} label />
      <Header as='h2'  >
        {project.collaborative ? 'Collaborative' : 'Solo'} Project
        {renderNavButtons()}
        <Header.Subheader>{project.projectType}</Header.Subheader>
      </Header>
      <hr></hr>
      {renderLabels()}
      <Segment.Group>
        <Segment className="description">
          {project.description}
        </Segment>
        {
          project.skills && <Segment>
            <Header>Skills</Header>
            <List horizontal>
              {project.skills.map((skill, i) =>
                <List.Item key={i} content={skill} />
              )}
            </List>
          </Segment>
        }
        {
          project.packages && <Segment>
            <Header>Packages</Header>
            <List horizontal>
              {project.packages.map((pkg, i) =>
                <List.Item key={i} content={pkg} />
              )}
            </List>
          </Segment>
        }
        {
          project.apis && <Segment>
            <Header>APIs</Header>
            <List horizontal>
              {project.apis.map((api, i) =>
                <List.Item key={i} content={api} />
              )}
            </List>
          </Segment>
        }
      </Segment.Group>
    </div>
  )
}

export default Project