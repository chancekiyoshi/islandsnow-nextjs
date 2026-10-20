'use client';

import { Container, Row, Col, Image } from 'react-bootstrap';

const IslandSnowLogo = () => (
  <Container className="my-3">
    <Row className="justify-content-center">
      <Col xs="auto">
        <Image src="/experience-islandsnow-bootstrap-logo.png" alt="Island Snow Logo" fluid />
      </Col>
    </Row>
  </Container>
);

export default IslandSnowLogo;