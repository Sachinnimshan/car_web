import React from "react";
import Footer from "../footer";
import Header from "../header";
import About from "./About";
import Home from "./Home";
import { MainLayoutContainer } from "./sections.styled";
import Speed from "./Speed";

function MainLayout() {
  return (
    <MainLayoutContainer>
      <Header />
      <Home />
      <Speed />
      <About/>
      <Footer />
    </MainLayoutContainer>
  );
}

export default MainLayout;
