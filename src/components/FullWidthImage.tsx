'use client';

import { Container, Row, Col, Image } from 'react-bootstrap';

const FullWidthImage = () => (
  <Container fluid className="px-0 my-3">
    <Row className="g-0">
      <Col>
        <Image src="/experience-islandsnow-bootstrap-main.png" alt="Island Snow Main Banner" fluid className="w-100" />
      </Col>
    </Row>
  </Container>
);

export default FullWidthImage;