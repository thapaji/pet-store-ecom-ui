import React from "react";
import { Card } from "react-bootstrap";

export const Tiles = ({ pic, title }) => {
  return (
    <Card className="tile-card">
      <Card.Img variant="top" src={pic} className="tile-img" />
      <Card.Body className="tile-body">
        <Card.Title className="tile-title">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
