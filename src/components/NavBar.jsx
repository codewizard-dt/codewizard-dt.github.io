import { useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Menu } from "semantic-ui-react"

const NavBar = (props) => {
  const { pathname } = useLocation()

  return (
    <Menu>
      <NavLink to="/">
        <Menu.Item id="nav-name">David Taylor</Menu.Item>
      </NavLink>
      <Menu.Menu position="right">
        <NavLink to="/" >
          <Menu.Item active={pathname === "/"} >Projects</Menu.Item>
        </NavLink>
        <NavLink to="/about">
          <Menu.Item active={pathname === "/about"}>About</Menu.Item>
        </NavLink>
        <NavLink to="/contact">
          <Menu.Item active={pathname === "/contact"}>Contact</Menu.Item>
        </NavLink>
        <NavLink to="/resume">
          <Menu.Item active={pathname === "/resume"}>Resume</Menu.Item>
        </NavLink>

      </Menu.Menu>
    </Menu>
  )
}

export default NavBar