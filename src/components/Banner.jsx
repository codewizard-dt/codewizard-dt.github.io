import { Label } from 'semantic-ui-react'
import './Banner.sass'

const Banner = ({ roundedImgSrc, bgImgSrc, bgImgStyle = {}, caption, label }) => {
  return (
    <figure className="splash" style={{ backgroundImage: `url(${bgImgSrc})`, backgroundRepeat: 'no-repeat', ...bgImgStyle }}>
      <Label ribbon='right' content={caption} />
      {/* {label ?  : <figcaption>{caption}</figcaption>} */}
      {roundedImgSrc &&
        <div className="roundedWrapper">
          <div className="rounded" style={{ backgroundImage: `url(${roundedImgSrc})` }} ></div>
        </div>
      }
    </figure>
  )
}

export default Banner