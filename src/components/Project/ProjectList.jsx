import { useState } from 'react';
import { Card } from 'semantic-ui-react';
import ChunkCardList from '../chunk/ChunkCardList';
import ProjectListItem from './ProjectListItem';

const ProjectList = ({ projects }) => {
  const renderCard = (project, i) => <ProjectListItem key={i} project={project} />
  return <ChunkCardList list={projects} renderCard={renderCard} />
  return (
    <Card.Group className='two'>
      {projects.map((project, i) =>
        <ProjectListItem key={i} project={project} />)}
    </Card.Group>
  )
}

export default ProjectList