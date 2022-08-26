import './Banner.sass'
const Banner = ({ roundedImgSrc, bgImgSrc, bgImgStyle = {}, caption }) => {
  return (
    <figure className="splash">
      {roundedImgSrc && <div className="rounded" style={{ backgroundImage: `url(${roundedImgSrc})` }} ></div>}
      <img src={bgImgSrc} style={{ bgImgStyle }} />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export default Banner