import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import Header from "../components/layouts/Header";
import { Hero } from "../components/layouts/Hero";
import { CategoriesTiles } from "../components/CategoriesTiles";
import { Featured } from "../components/Featured";
import { PaymentInfo } from "../components/PaymentInfo";

const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <Hero />
      <CategoriesTiles />
      <Featured />
      <PaymentInfo />
    </>
  );
};

export default Home;
