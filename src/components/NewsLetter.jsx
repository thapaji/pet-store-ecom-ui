import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import { CustomInput } from "./forms/CustomInput";

export const NewsLetter = () => {
  return (
    <Row className="p-5 mt-5 bg-primary text-center">
      <h3>Subscribe to Our Newsletter</h3>
      <p>
        Sign up for our newsletter to receive updates, special offers, and new product releases.
      </p>
      <Form>
        <CustomInput type="email" placeholder="Your email address" />
        <Button type="submit">Subscribe</Button>
      </Form>
    </Row>
  );
};
