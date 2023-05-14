import React, { useRef } from "react";
import Footer from "../footer";
import Header from "../header";
import useResponsive from "../hooks/useResponsive";
import About from "./About";
import Engine from "./Engine";
import Home from "./Home";
import { MainLayoutContainer } from "./sections.styled";
import Speed from "./Speed";
import Technical from "./Technical";
import Testimonials from "./Testimonials";
import Variations from "./Variations";

function MainLayout({ mobile }) {
  const sectionRef = useRef(null);
  return (
    <MainLayoutContainer>
      <Header mobile={mobile} />
      <Home mobile={mobile} />
      <Speed mobile={mobile} />
      <About mobile={mobile} />
      <Variations mobile={mobile} />
      <Technical mobile={mobile} />
      <Engine mobile={mobile} />
      <Testimonials mobile={mobile} />
      <Footer mobile={mobile} />
    </MainLayoutContainer>
  );
}

export default MainLayout;
