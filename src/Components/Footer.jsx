import { Container, Col, Row } from "react-bootstrap";
import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
function Footer() {
  return (
    <Container fluid id="footer-container" className="text-white">
      <Row lg={1} className="text-center">
        <Col className="pt-3 pb-3">
          <h1 id="titulo">¡GRACIAS POR INSCRIBIRTE!</h1>
        </Col>
        <Col lg={4}>
          <MDBIcon fas icon="angle-double-right" id="icon-animation" />
          <MDBIcon fas icon="angle-double-right" id="icon-animation" />
          <MDBIcon fas icon="angle-double-right" id="icon-animation" />
        </Col>
        <Col lg={4} className="mb-5">
          <p id="typing-parrafo">Si presentas algun problema...</p>
          <p id="typing-parrafo">
            contacta con quien te presento el formulario
          </p>
        </Col>
        <Col lg={4}>
          <MDBIcon fas icon="angle-double-left" id="icon-animation" />
          <MDBIcon fas icon="angle-double-left" id="icon-animation" />
          <MDBIcon fas icon="angle-double-left" id="icon-animation" />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
