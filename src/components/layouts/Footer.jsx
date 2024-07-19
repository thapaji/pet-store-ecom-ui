import React from "react";
import { Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <Row className="mt-5 p-5 bg-secondary text-white text-center">
      <p>Copyright &copy; 2024 Pet Care. All rights reserved.</p>
      <p>
        Made with love by{" "}
        <a href="https://www.sujanthapa.dev" target="_blank">
          @Sujan
        </a>
      </p>
    </Row>
  );
};
