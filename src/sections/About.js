import React from "react";
import { carSlideData } from "../common/common";
import { PlayIcon } from "../icons";
import { AboutImg, CarSlideImg1, CarSlideImg2, CarSlideImg3 } from "../images";
import { AboutBanner } from "../images/images.styled";
import {
  SectionHeader,
  SectionSubTitle,
  SectionText,
  SectionTitle,
  SectionTitleContainer,
  SectionTitleTop,
} from "../styles/typography";
import {
  AboutBottomContainer,
  AboutBottomLeft,
  AboutBottomRight,
  AboutContainer,
  AboutInfoBottom,
  AboutRedBanner,
  AboutRedBannerText,
  AboutRight,
  AboutSlideContainer,
  AboutTopRight,
  AboutTopSection,
  AboutVideoImg,
  PlayButton,
  SlideShowImg,
} from "./sections.styled";

function About({ mobile }) {
  return (
    <AboutContainer mobile={mobile}>
      <AboutTopSection>
        <AboutBanner src={AboutImg} alt="Wheels" />
        <AboutTopRight>
          <SectionTitleContainer>
            <SectionTitleTop>
              <SectionHeader>About</SectionHeader>
              <SectionTitle>WHEELS ZQ6</SectionTitle>
            </SectionTitleTop>
            <SectionSubTitle>Discover Our World</SectionSubTitle>
          </SectionTitleContainer>

          <SectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales justo in nisi mollis aliquam. Integer congue fringilla
            cursus. In mi ipsum, consequat non venenatis ut, commodo sed dolor.
            Aliquam erat volutpat.
            <br />
            <br />
            Phasellus blandit tincidunt nisi nec ultricies. Ut ac condimentum
            dui. Maecenas sollicitudin magna dolor, eget efficitur metus
            tristique sed. Mauris sed egestas lorem. Fusce ut volutpat velit, at
            porta arcu.
          </SectionText>
        </AboutTopRight>
      </AboutTopSection>
      <AboutBottomContainer>
        <AboutBottomLeft>
          <AboutRedBanner>
            <AboutRedBannerText>OUR INNOVATIVE DESIGN</AboutRedBannerText>
            <AboutRedBannerText small>Concept Racing Cars</AboutRedBannerText>
          </AboutRedBanner>
          <AboutVideoImg image={CarSlideImg2}>
            <PlayButton>
              <PlayIcon />
            </PlayButton>
          </AboutVideoImg>
        </AboutBottomLeft>
        <AboutBottomRight>
          <AboutSlideContainer>
            <SlideShowImg src={carSlideData[0].image} />
          </AboutSlideContainer>
          <AboutInfoBottom>
            <SectionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse sodales justo in nisi mollis aliquam. Integer congue
              fringilla cursus. In mi ipsum, consequat non venenatis ut, commodo
              sed dolor. Aliquam erat volutpat.
            </SectionText>
          </AboutInfoBottom>
        </AboutBottomRight>
      </AboutBottomContainer>
    </AboutContainer>
  );
}

export default About;
