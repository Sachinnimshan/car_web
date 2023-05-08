import React from "react";
import useResponsive from "../hooks/useResponsive";
import { CarBanner } from "../images";
import { HomeBanner } from "../images/images.styled";
import { BG_COLOR, PRIMARY_COLOR, WHITE_COLOR } from "../styles/theme";
import { HomePageHeader, SectionTitle } from "../styles/typography";
import {
  HeroBanner,
  HomeContainer,
  HomeInfoContainer,
  TypeHightlight,
} from "./screens.styled";

function Home() {
  const isMobile = useResponsive();
  return (
    <HomeContainer mobile={isMobile}>
      <HomeInfoContainer>
        <HomePageHeader >New Collection</HomePageHeader>
        <SectionTitle color={BG_COLOR}>
          Check out new wheels <TypeHightlight>ZQ6</TypeHightlight>
        </SectionTitle>
      </HomeInfoContainer>
      <HomeBanner src={CarBanner} />
    </HomeContainer>
  );
}

export default Home;
