import React from "react";
import { Col, Row } from "react-bootstrap";
import pet1 from "../../assets/pet1_bg.png";
import pet2 from "../../assets/pet2_bg.png";
import pet3 from "../../assets/pet3_bg.png";

export const Hero = () => {
  return (
    <Row>
      <Col>
        <img src={pet1} alt="pet1" style={{ width: "100%" }} />
      </Col>
      <Col>
        <img src={pet3} alt="pet3" style={{ width: "100%" }} />
      </Col>
      <Col>
        <img src={pet2} alt="pet2" style={{ width: "100%" }} />
      </Col>
    </Row>
  );
};
