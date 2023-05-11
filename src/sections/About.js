import React from "react";
import { AboutImg } from "../images";
import { AboutBanner } from "../images/images.styled";
import {
  SectionHeader,
  SectionSubTitle,
  SectionText,
  SectionTitle,
  SectionTitleContainer,
  SectionTitleTop,
} from "../styles/typography";
import { AboutContainer, AboutRight } from "./sections.styled";

function About({mobile}) {
  return (
    <AboutContainer mobile={mobile}>
      <AboutBanner src={AboutImg} />
      <AboutRight>
        <SectionTitleContainer>
          <SectionTitleTop>
            <SectionHeader>About</SectionHeader>
            <SectionTitle>WHEELS ZQ6</SectionTitle>
          </SectionTitleTop>
          <SectionSubTitle>Discover Our World</SectionSubTitle>
        </SectionTitleContainer>

        <SectionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sodales justo in nisi mollis aliquam. Integer congue fringilla cursus.
          In mi ipsum, consequat non venenatis ut, commodo sed dolor. Aliquam
          erat volutpat.
          <br />
          <br />
          Phasellus blandit tincidunt nisi nec ultricies. Ut ac condimentum dui.
          Maecenas sollicitudin magna dolor, eget efficitur metus tristique sed.
          Mauris sed egestas lorem. Fusce ut volutpat velit, at porta arcu.
        </SectionText>
      </AboutRight>
    </AboutContainer>
  );
}

export default About;
