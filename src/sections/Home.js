import React from "react";
import { CarImageRed } from "../images";
import { BG_COLOR } from "../styles/theme";
import { HomePageHeader, SectionTitle } from "../styles/typography";
import {
  FadeText,
  Fog,
  HeroBanner,
  HomeBanner,
  HomeContainer,
  HomeInfoContainer,
  TypeHightlight,
} from "./sections.styled";

function Home({ mobile, ref }) {
  return (
    <HomeContainer mobile={mobile} ref={ref}>
      <HomeInfoContainer mobile={mobile}>
        <HomePageHeader>New Collection</HomePageHeader>
        <SectionTitle color={BG_COLOR}>
          Check out new wheels <TypeHightlight>ZQ6</TypeHightlight>
        </SectionTitle>
        <FadeText>Roadster</FadeText>
        <Fog />
      </HomeInfoContainer>

      <HeroBanner>
        <HomeBanner src={CarImageRed} alt="Wheels Home" />
      </HeroBanner>
    </HomeContainer>
  );
}

export default Home;
