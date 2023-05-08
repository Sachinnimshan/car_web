import React, { useEffect, useState } from "react";
import Footer from "../footer";
import Header from "../header";
import Home from "./Home";
import { MainLayoutContainer } from "./screens.styled";

function MainLayout() {
  return (
    <MainLayoutContainer>
      <Header />
      <Home />
      <Footer />
    </MainLayoutContainer>
  );
}

export default MainLayout;
