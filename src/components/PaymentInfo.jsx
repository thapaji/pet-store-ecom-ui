import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import gateway from "../assets/payment_gateway.png";

export const PaymentInfo = () => {
  return (
    <Container>
      <Row className="bg-secondary mt-4 p-4">
        {" "}
        <h3></h3>
        <Col>
          <img src={gateway} alt="" />
        </Col>
        <Col>
          <h2>Payments we accept</h2>
          <p>
            We accept all types of cards payments. We use secure paymewnt gateway for your peace of
            mind. Shop online pay by card and leave the stress to us.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
