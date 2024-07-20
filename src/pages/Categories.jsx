import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Tiles } from "../components/Tiles";
import pets from "../assets/pets.png";
import accessories from "../assets/accessories.png";
import food from "../assets/food.png";
import toys from "../assets/toys.png";

const Categories = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1>Shop by Categories</h1>
          <hr />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col style={{ height: "50vh" }}>
          <Tiles pic={pets} title={"Pets"} />
        </Col>
        <Col style={{ height: "50vh" }}>
          <Tiles pic={accessories} title={"Accessories"} />
        </Col>
        <Col>
          <Row style={{ height: "24vh" }}>
            <Tiles pic={food} title={"Food"} />
          </Row>
          <Row style={{ height: "24vh" }} className="mt-3">
            <Tiles pic={toys} title={"Toys"} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
