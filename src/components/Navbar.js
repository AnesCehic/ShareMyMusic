import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom'

import '../styles/Navbar.scss';

export const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const toggle = () => setIsOpen(!isOpen);
  const toggleMenu = () => setIsOpenMenu(!isOpenMenu);

  return (
    <div>
      <Navbar color="light" style={{ position: "fixed", zIndex: 100, top: 0, width: "100%" }} light expand="md">
        <NavbarBrand href="#">ShareMyMusic</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto nav" navbar>
            <NavItem>
              <NavLink className="navLink" activeClassName="activeNavLink" to="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle caret>
                Playlists
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink className="navLink" activeClassName="activeNavLink" to="/createPlaylist">Create</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="navLink" activeClassName="activeNavLink" to="/playlists">Show</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink className="navLink" activeClassName="activeNavLink" to="/login">Login</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
