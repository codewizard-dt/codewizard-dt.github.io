import _ from 'lodash';
import { useState } from 'react'
import { Card, Header } from 'semantic-ui-react';
import ChunkNavBar from './ChunkNavBar';
import './ChunkCardList.sass'

const ChunkCardList = ({ list, chunkSize = 4, className = '', header, renderCard, emptyMessage }) => {
  const chunks = _.chunk(list, chunkSize);
  const [chunkIndex, setChunkIndex] = useState(0);
  className += ' chunk list';
  return (
    <div className={className}>
      <div className="chunk nav header">
        {header && <Header content={header} />}
        <ChunkNavBar chunks={chunks} chunkSize={chunkSize} chunkIndex={chunkIndex} setChunkIndex={setChunkIndex} />
      </div>
      <Card.Group stackable itemsPerRow={2}>
        {chunks.length ? chunks[chunkIndex].map((item, i) => renderCard(item, i)) : <Card content={<Card.Content content={emptyMessage || 'No results'} />} />}
      </Card.Group>
    </div>
  )
}

export default ChunkCardList