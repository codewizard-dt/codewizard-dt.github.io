import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Image, Item, List, Menu } from "semantic-ui-react"
import useMediaQuery from "../hooks/useMediaQuery"
import './NavBar.sass'

const NavBar = (props) => {
  const { pathname } = useLocation()

  const shouldCollapse = useMediaQuery('(max-width: 500px)')
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <Menu className={shouldCollapse ? 'collapsible' : 'expanded'}>
      <Link to="/">
        <Menu.Item id="nav-name"><Image src="/images/icon-pink.png" /> David Taylor</Menu.Item>
      </Link>
      {shouldCollapse
        ? <>
          <Menu.Menu position="right">
            <Menu.Item icon='bars' float="right" onClick={() => setIsCollapsed(!isCollapsed)} />
          </Menu.Menu>
          <List className={isCollapsed ? "sub-menu collapsed" : "sub-menu expanded"} divided >
            <NavLink to="/">
              <Item onClick={() => setIsCollapsed(true)} className={pathname === "/" ? 'active' : undefined}>About</Item>
            </NavLink>
            <NavLink to="/projects" >
              <Item onClick={() => setIsCollapsed(true)} className={pathname === "/projects" ? 'active' : undefined} >Projects</Item>
            </NavLink>
            <NavLink to="/contact">
              <Item onClick={() => setIsCollapsed(true)} className={pathname === "/contact" ? 'active' : undefined}>Contact</Item>
            </NavLink>
            <NavLink to="/resume">
              <Item onClick={() => setIsCollapsed(true)} className={pathname === "/resume" ? 'active' : undefined}>Resume</Item>
            </NavLink>
          </List>
        </>
        : <>
          <Menu.Menu position="right" >
            <NavLink to="/">
              <Menu.Item active={pathname === "/"}>About</Menu.Item>
            </NavLink>
            <NavLink to="/projects" >
              <Menu.Item active={pathname === "/projects"} >Projects</Menu.Item>
            </NavLink>
            <NavLink to="/contact">
              <Menu.Item active={pathname === "/contact"}>Contact</Menu.Item>
            </NavLink>
            <NavLink to="/resume">
              <Menu.Item active={pathname === "/resume"}>Resume</Menu.Item>
            </NavLink>

          </Menu.Menu>
        </>
      }
    </Menu>
  )
}

export default NavBar