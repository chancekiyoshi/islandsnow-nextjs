'use client';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const MiddleMenu = () => (
  <Navbar expand="lg" className="justify-content-center py-0">
    <Container className="justify-content-center">
      <Nav>
        <NavDropdown title="MEN" id="men-dropdown" className="mx-2" />
        <NavDropdown title="WOMEN" id="women-dropdown" className="mx-2" />
        <NavDropdown title="KIDS" id="kids-dropdown" className="mx-2" />
        <NavDropdown title="BRANDS" id="brands-dropdown" className="mx-2" />
        <Nav.Link href="#" className="mx-2">SEARCH</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MiddleMenu;