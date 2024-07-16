import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import wave from "../../assets/wave.svg";

const Header = () => {
  return (
    <>
      <header>
        <Navbar expand="sm" className="bg-primary header">
          <Container>
            <Navbar.Brand href="#home" className="nav-link">
              Pet Store
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#home" className="me-3">
                  Home
                </Nav.Link>
                <Nav.Link href="#categories" className="me-3">
                  Categories
                </Nav.Link>
                <Nav.Link href="#products" className="me-3">
                  Products
                </Nav.Link>
                <Nav.Link href="#about" className="me-3">
                  About Us
                </Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Link href="#cart">
                  <FaShoppingCart />
                </Nav.Link>
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
