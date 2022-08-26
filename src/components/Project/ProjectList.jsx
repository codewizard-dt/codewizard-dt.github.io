import { useState } from 'react';
import { Card } from 'semantic-ui-react';
import ChunkCardList from '../chunk/ChunkCardList';
import ProjectListItem from './ProjectListItem';

const ProjectList = ({ projects }) => {
  const renderCard = (project, i) => <ProjectListItem key={i} project={project} />
  return <ChunkCardList header="Recent Work" sticky list={projects} renderCard={renderCard} />
}

export default ProjectList