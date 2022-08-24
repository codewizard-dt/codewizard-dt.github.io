import { Menu } from "semantic-ui-react"

const NavBar = (props) => {
  return (
    <Menu>
      <Menu.Item>
        Logo
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>Portfolio</Menu.Item>
        <Menu.Item>About Me</Menu.Item>
        <Menu.Item>Contact</Menu.Item>
        <Menu.Item>Resume</Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default NavBar