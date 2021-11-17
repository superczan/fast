import React, { useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import color from 'hex-to-color-name';

function Footer() {
  const [favColor, setFavColor] = useState('#000000');
  const changeColor = (e) => setFavColor(e.target.value);
  const inputRef = useRef(null);
  return (
    <Container fluid>
      <Row style={{ background: favColor }}>
        <Col>
          <p style={{ textAlign: 'center' }}>
            <span
              style={{ background: 'white' }}
              onClick={() => inputRef.current.click()}
            >
              Your favorite color is {color(favColor)}
            </span>
            <input
              ref={inputRef}
              type="color"
              value={favColor}
              onChange={changeColor}
              style={{ display: 'none' }}
            />
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
