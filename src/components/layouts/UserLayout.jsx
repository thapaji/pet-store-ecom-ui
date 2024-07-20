import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { NewsLetter } from "../NewsLetter";

export const UserLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <NewsLetter />
      <Footer />
    </>
  );
};
