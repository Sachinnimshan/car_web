import React from "react";
import { CarImageRed } from "../images";
import { HomeBanner } from "../images/images.styled";
import { BG_COLOR } from "../styles/theme";
import { HomePageHeader, SectionTitle } from "../styles/typography";
import {
  FadeText,
  Fog,
  HeroBanner,
  HomeContainer,
  HomeInfoContainer,
  TypeHightlight,
} from "./sections.styled";

function Home({mobile}) {
  return (
    <HomeContainer mobile={mobile}>
      <HomeInfoContainer>
        <HomePageHeader>New Collection</HomePageHeader>
        <SectionTitle color={BG_COLOR}>
          Check out new wheels <TypeHightlight>ZQ6</TypeHightlight>
        </SectionTitle>
        <FadeText>Roadster</FadeText>
      </HomeInfoContainer>
      <Fog />
      <HeroBanner>
        <HomeBanner src={CarImageRed} alt="Wheels"/>
      </HeroBanner>
    </HomeContainer>
  );
}

export default Home;
