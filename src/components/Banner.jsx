import { Label } from 'semantic-ui-react'
import './Banner.sass'

const Banner = ({ roundedImgSrc, bgImgSrc, bgImgStyle = {}, caption, label }) => {
  return (
    <figure className="splash" style={{ backgroundImage: `url(${bgImgSrc})`, backgroundRepeat: 'no-repeat', ...bgImgStyle }}>
      {label ? <Label ribbon='right' content={caption} /> : <figcaption>{caption}</figcaption>}{roundedImgSrc && <div className="rounded" style={{ backgroundImage: `url(${roundedImgSrc})` }} ></div>}
    </figure>
  )
}

export default Banner