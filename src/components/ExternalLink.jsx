const external = ({ href, text, target = "_blank", className = '' }) => {
  className = [...className.split(' '), 'ui link'].join(' ')
  return (
    <a className={className} href={href} target={target}>
      {text}
    </a>
  )
}

export default external