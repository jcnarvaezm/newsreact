import React from 'react';
import {
  Navbar,
  Nav,
  DropdownButton,
  DropdownItem,
  Icon,
  Avatar,
} from 'emerald-ui/lib/';
import newsLogo from '../../img/logo-2.svg';
const Header = () => {
  return (
    <Navbar breakAt="xs" theme="light">
      <Navbar.Brand>
        <a href="#foo">
          <img src={newsLogo} alt="News" />
        </a>
      </Navbar.Brand>
      <Nav grow collapsible>
        <DropdownButton title="Sections" id="dd1">
          <DropdownItem eventKey="1">
            <Icon name="email" />
            Action
          </DropdownItem>
          <DropdownItem eventKey="2">
            <Icon name="email" />
            Another action
          </DropdownItem>
          <DropdownItem eventKey="3">
            <Icon name="email" />
            Active Item
          </DropdownItem>
          <DropdownItem eventKey="3">
            <Icon name="email" />
            Active Item
          </DropdownItem>
          <DropdownItem eventKey="3">
            <Icon name="email" />
            Active Item
          </DropdownItem>
        </DropdownButton>
        <a href="#foo">Editorials</a>
        <a href="#foo">Contact us</a>
      </Nav>
      <Nav>
        <DropdownButton
          noCaret
          fromRight
          id="dd2"
          title={<Avatar title="JS" />}
        ></DropdownButton>
      </Nav>
    </Navbar>
  );
};
export default Header;
