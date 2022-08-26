import './Banner.sass'
const Banner = (props) => {
  return (
    <figure className="splash">
      <div className="avatar"></div>
      <img src="/images/analytics.jpeg" alt="analytics backdrop" />
      <figcaption>Recent Projects</figcaption>
    </figure>
  )
}

export default Banner