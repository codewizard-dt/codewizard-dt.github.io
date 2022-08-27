import { Link } from "react-router-dom"
import { Menu } from "semantic-ui-react"
import './Footer.sass'
import ExternalLink from './ExternalLink';

const Footer = (props) => {
  return (
    <Menu id="footer" as='footer' size='massive' secondary>
      <ExternalLink href="https://github.com/codewizard-dt" ><Menu.Item icon="github" /></ExternalLink>
      <ExternalLink href="https://www.linkedin.com/in/david-taylor-fullstack/"><Menu.Item icon="linkedin" /></ExternalLink>
      <ExternalLink href="https://stackoverflow.com/users/19107584/codewizard-42"><Menu.Item icon="stack overflow" /></ExternalLink>

    </Menu>
  )
}

export default Footer