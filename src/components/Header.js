import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Logo from '../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Row>
        <Col>
          <img src={Logo} width="40px" alt="OMDb movie" />
          <h3 className="text-center">OMDB Movie</h3>
        </Col>
      </Row>
    </Container>
  );
}
