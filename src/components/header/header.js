import React from 'react';
import {
  Navbar,
  Nav,
  DropdownButton,
  DropdownItem,
  Avatar,
} from 'emerald-ui/lib/';
import newsLogo from '../../img/logo-2.svg';

const Header = () => {
  return (
    <Navbar breakAt="xs" theme="light" barClassName="container">
      <Navbar.Brand>
        <a href="#foo">
          <img src={newsLogo} alt="News" />
        </a>
      </Navbar.Brand>
      <Nav grow collapsible>
        <DropdownButton title="Sections" id="dd1">
          <DropdownItem eventKey="1">
            <i className="fas fa-football-ball"></i>
            Sport
          </DropdownItem>
          <DropdownItem eventKey="2">
            <i className="fas fa-film"></i>
            Entertainment
          </DropdownItem>
          <DropdownItem eventKey="3">
            <i className="fas fa-users"></i>
            Social
          </DropdownItem>
          <DropdownItem eventKey="3">
            <i className="fas fa-heartbeat"></i>
            Health
          </DropdownItem>
          <DropdownItem eventKey="3">
            <i className="fas fa-mobile-alt"></i>
            Technology
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
