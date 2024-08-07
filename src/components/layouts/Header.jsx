import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaFacebook, FaInstagram, FaShoppingCart } from "react-icons/fa";
import wave from "../../assets/wave.svg";
import { Link } from "react-router-dom";
import logo from "../../assets/pet-shop.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="login-header">
          <Container>
            <Row>
              <Col className="me-auto">
                {" "}
                <span>Free Shipping for orders over $100.</span>
              </Col>
              <Col className="text-end">
                <Link to="/login">Login</Link>
                <Link to="https://www.facebook.com" target="_blank">
                  {" "}
                  <FaFacebook />
                </Link>
                <Link to="https://www.instagram.com" target="_blank">
                  {" "}
                  <FaInstagram />
                </Link>
                <Link>
                  {" "}
                  <FaEnvelope />
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="p-4">
          <Container>
            <Row>
              <Col>
                <div className="logo">
                  <img src={logo} alt="Logo" style={{ width: "100%" }} />
                </div>
              </Col>
              <Col className="text-end fs-1">
                <Link to="/cart">
                  <FaShoppingCart />
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
        <Navbar expand="sm" className="bg-primary header">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/categories" className="nav-link">
                  Categories
                </Link>
                <Link to="/all-products" className="nav-link">
                  All Products
                </Link>
                <Link to="/about-us" className="nav-link">
                  About Us
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="svg-wave">
          <img src={wave} alt="Wave" />
        </div>
      </header>
    </>
  );
};

export default Header;
