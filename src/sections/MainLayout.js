import React from "react";
import Footer from "../footer";
import Header from "../header";
import useResponsive from "../hooks/useResponsive";
import About from "./About";
import Engine from "./Engine";
import Home from "./Home";
import { MainLayoutContainer } from "./sections.styled";
import Speed from "./Speed";
import Variations from "./Variations";

function MainLayout({ mobile }) {
  return (
    <MainLayoutContainer>
      <Header mobile={mobile} />
      <Home mobile={mobile} />
      <Speed mobile={mobile} />
      <About mobile={mobile} />
      <Variations mobile={mobile} />
      <Engine mobile={mobile} />
      <Footer mobile={mobile} />
    </MainLayoutContainer>
  );
}

export default MainLayout;
