import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1>About Us</h1>
          <hr />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h2>Our Mission</h2>
          <p>
            Welcome to Pet Shop: Online Store, your one-stop destination for all your pet needs. Our
            mission is to provide pet owners with high-quality products and exceptional customer
            service. We are dedicated to helping you care for your furry, feathered, and finned
            friends with ease and convenience.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h2>What We Do</h2>
          <p>
            At Pet Shop: Online Store, we offer a wide range of products for various pets,
            including:
          </p>
          <ul>
            <li>
              <strong>Pet Food:</strong> Nutritious and delicious options for dogs, cats, birds,
              fish, and small animals.
            </li>
            <li>
              <strong>Pet Accessories:</strong> From toys and bedding to grooming supplies and
              health products, we've got you covered.
            </li>
            <li>
              <strong>Pet Services:</strong> Expert advice and tips on pet care, training, and
              health to ensure your pets are happy and healthy.
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h2>Our Story</h2>
          <p>
            Founded in [Year], Pet Shop: Online Store was created by a team of passionate pet lovers
            who wanted to make it easier for pet owners to find the best products and services for
            their pets. Our founder, Edwina Wheeler, a senior industry figure in the Australian ICT
            sector, envisioned an online store where technology and pet care could come together
            seamlessly. With her leadership and the support of Advanced Consulting Services, we have
            developed a comprehensive solution that caters to all your pet needs.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h2>Contact Us</h2>
          <p>
            Have questions or want to learn more? Reach out to us at [contact email] or follow us on
            our social media channels.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <p>
            Thank you for being a part of Pet Shop: Online Store. Together, we can make a difference
            in the lives of pets and their owners.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
