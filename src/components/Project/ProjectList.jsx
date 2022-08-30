import _ from 'lodash';
import { useEffect, useState } from 'react';
import { Card, Label } from 'semantic-ui-react';
import ChunkCardList from '../chunk/ChunkCardList';
import ProjectListItem from './ProjectListItem';
import { typeMap } from '../../data/projects';
import './ProjectList.sass'

const ProjectList = ({ projects }) => {
  const renderCard = (project, i) => <ProjectListItem key={i} project={project} />
  const [list, setList] = useState(projects)
  const [type, setType] = useState(null)

  useEffect(() => {
    if (type) setList(projects.filter(({ projectType }) => projectType === type))
    else setList(projects)
  }, [type])
  return (
    <>
      <Label.Group id='type-labels'>
        {Object.entries(typeMap).map(([type, count]) => <Label key={type} content={type} detail={count} />)}
      </Label.Group>
      <ChunkCardList header="Recent Work" sticky list={list} renderCard={renderCard} />
    </>
  )
}

export default ProjectList