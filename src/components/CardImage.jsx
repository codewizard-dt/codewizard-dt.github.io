import { Image } from "semantic-ui-react"

const CardImage = ({ src, pos = 'center' }) => {
  let style = {
    backgroundImage: `url(${src})`,
    backgroundSize: src.includes('contain') ? 'contain' : 'cover',
    backgroundPosition: pos,
    backgroundRepeat: 'no-repeat',
    height: '200px'
  }
  return (
    <div className="card-image" style={style}></div>
  )
}

export default CardImage