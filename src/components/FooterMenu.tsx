'use client';

import { Container, Row, Col } from 'react-bootstrap';

const FooterMenu = () => (
  <footer className="bg-dark text-white py-4">
    <Container>
      <Row>
        <Col md={4}>
          <h5>NAVIGATION</h5>
          <hr />
          <p>About Us<br />Videos<br />Store Locations</p>
        </Col>
        <Col md={4}>
          <h5>MAIN MENU</h5>
          <hr />
          <p>Men<br />Women<br />Kids</p>
        </Col>
        <Col md={4}>
          <h5>CONNECT</h5>
          <hr />
          <p>Sign up for the latest updates</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterMenu;