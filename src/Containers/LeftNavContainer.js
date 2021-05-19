/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export const LeftNavContainer = (props) => {

  return (
    <>     
      <Nav vertical className="" style={{ position: 'relative', marginTop: "100px"}} pills>
      <NavItem>
        <NavLink href="#">foo</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">bar</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">baz</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          disabled
        </NavLink>
      </NavItem>
    </Nav>
    </>
  );
};

