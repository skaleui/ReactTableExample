/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export const NavbarContainer = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggle = () => setIsOpen( !isOpen );

  return (
    <>
      <Navbar
        color="light" fixed light expand="lg"
        className="fixed-top ml-5"
        style={{marginTop: '50px'}}
        id="topnavbar"
      >
        <NavbarBrand href="/" 
        style={{ marginLeft: '20px'}}>
          <img 
                  alt=""
                  src="/logo192.png" 
                  width="30px" 
                  height="30px" 
                  className="d-inline-block align-top"/>{' '}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="flex-column flex-md-row" style={{ width: "100%" }} pills>
            <NavItem> 
              <NavLink active className="mb-sm-4 mb-md-0">Login</NavLink>
            </NavItem>
            <NavItem> 
              <NavLink className="mb-sm-4 mb-md-0">Execute</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mb-sm-4 mb-md-0">Save</NavLink>
            </NavItem>
            <NavItem> 
              <NavLink className="mb-sm-4 mb-md-0">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

