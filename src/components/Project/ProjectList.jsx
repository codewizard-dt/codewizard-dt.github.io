import _ from 'lodash';
import { useEffect, useState } from 'react';
import { Card, Label } from 'semantic-ui-react';
import ChunkCardList from '../chunk/ChunkCardList';
import ProjectListItem from './ProjectListItem';
import { projectTypeSort, typeMap } from '../../data/projects';
import './ProjectList.sass'
import CheckboxLabel from '../form/CheckboxLabel';

const ProjectList = ({ projects }) => {
  const renderCard = (project, i) => <ProjectListItem key={i} project={project} />
  const [list, setList] = useState(projects)
  const [types, setTypes] = useState([])

  useEffect(() => {
    if (types.length) setList(projects.filter(({ projectType }) => types.includes(projectType)))
    else setList(projects)
  }, [types.length])

  const handleTypeChange = (checkboxState) => {
    for (let [type, active] of Object.entries(checkboxState)) {
      if (active === true && !types.includes(type)) setTypes([...types, type].sort(projectTypeSort))
      else if (active === false) setTypes(types.filter(t => t !== type).sort(projectTypeSort))
    }
  }

  return (
    <>
      <Label.Group id='type-labels'>
        {Object.entries(typeMap).sort(([t1], [t2]) => projectTypeSort(t1, t2)).map(([type, count]) => <CheckboxLabel onClick={handleTypeChange} key={type} name={type} content={type} detail={count} />)}
      </Label.Group>
      <ChunkCardList header="Recent Projects" subheader={types.length ? types.join(' | ') : "all project types"} sticky list={list} renderCard={renderCard} />
    </>
  )
}

export default ProjectList