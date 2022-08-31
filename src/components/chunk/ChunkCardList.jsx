import _ from 'lodash';
import { useEffect, useState } from 'react'
import { Card, Header } from 'semantic-ui-react';
import ChunkNavBar from './ChunkNavBar';
import './ChunkCardList.sass'

const ChunkCardList = ({ list, chunkSize = 4, className = '', header, subheader, renderCard, emptyMessage }) => {
  // const chunks = _.chunk(list, chunkSize);
  const [chunks, setChunks] = useState([])
  const [chunkIndex, setChunkIndex] = useState(0);
  className += ' chunk list';
  useEffect(() => {
    let newChunks = _.chunk(list, chunkSize)
    setChunks(newChunks)
    setChunkIndex(Math.min(chunkIndex, newChunks.length - 1))
  }, [list])
  return (
    <div className={className}>
      <div className="chunk nav header">
        {header && <Header as="h1" content={header} subheader={subheader} />}
        <ChunkNavBar chunks={chunks} chunkSize={chunkSize} chunkIndex={chunkIndex} setChunkIndex={setChunkIndex} />
      </div>
      <Card.Group stackable itemsPerRow={2}>
        {chunks.length ? chunks[chunkIndex].map((item, i) => renderCard(item, i)) : <Card content={<Card.Content content={emptyMessage || 'No results'} />} />}
      </Card.Group>
    </div>
  )
}

export default ChunkCardList