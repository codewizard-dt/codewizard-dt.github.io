import "./ExternalLink.sass"
const ExternalLink = ({ href, children, target = "_blank", className = '' }) => {
  className = [...className.split(' '), 'external link'].join(' ')
  return (
    <a className={className} href={href} target={target}>
      {children}
    </a>
  )
}

export default ExternalLink