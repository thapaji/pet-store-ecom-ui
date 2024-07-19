import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Tiles } from "./Tiles";
import springToy from "../assets/cat_spring_toy.png";
import scratcher from "../assets/scratcher.png";
import catToy from "../assets/cat_toy.png";
import catFood from "../assets/cat_food.png";
import catFood2 from "../assets/cat_food2.png";
import lint_roller from "../assets/lint_roller.png";
import belt1 from "../assets/belt1.png";
import belt2 from "../assets/belt2.png";

export const Featured = () => {
  return (
    <Container className="mt-5">
      <h3>Featured Products</h3>
      <Row className="mt-4">
        <Col>
          <Tiles pic={springToy} title={"Spring Toy"} />
        </Col>
        <Col>
          <Tiles pic={scratcher} title={"Scratcher"} />
        </Col>
        <Col>
          <Tiles pic={catToy} title={"Premium Toy"} />
        </Col>
        <Col>
          <Tiles pic={catFood} title={"Premium Cat Food"} />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Tiles pic={catFood2} title={"7 Flavours Food"} />
        </Col>
        <Col>
          <Tiles pic={lint_roller} title={"Lint Roller"} />
        </Col>
        <Col>
          <Tiles pic={belt1} title={"Everyday Belt"} />
        </Col>
        <Col>
          <Tiles pic={belt2} title={"Seat Belt"} />
        </Col>
      </Row>
    </Container>
  );
};
