import { useState } from 'react';
import { Card } from 'semantic-ui-react';
import ProjectListItem from './ProjectListItem';

const ProjectList = ({ projects }) => {
  const [active, setActive] = useState(null)
  const handleClick = (i) => {
    active === i ? setActive(null) : setActive(i)
  }

  return (
    <Card.Group className='two'>
      {projects.map((project, i) =>
        <ProjectListItem key={i} project={project} active={active === i} onClick={() => handleClick(i)} />)}
    </Card.Group>
  )
}

export default ProjectList