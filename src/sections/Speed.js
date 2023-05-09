import React from "react";
import useResponsive from "../hooks/useResponsive";
import {
  SectionSubTitle,
  SectionText,
  SectionTitle,
} from "../styles/typography";
import {
  RedDivider,
  Speedbar,
  SpeedContainer,
  SpeedStatContainer,
  StatValue,
} from "./sections.styled";

function Speed() {
  const isMobile = useResponsive();
  return (
    <SpeedContainer mobile={isMobile}>
      <SectionTitle>MIND BLOWING SPEED</SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida
        turpis semper, ultricies sem sit amet, ornare tellus.
      </SectionText>
      <SpeedStatContainer>
        <Speedbar>
          <StatValue>1.9s</StatValue>
          <SectionSubTitle>0-60mph</SectionSubTitle>
        </Speedbar>
        <RedDivider />
        <Speedbar>
          <StatValue>+250mph</StatValue>
          <SectionSubTitle>Top speed</SectionSubTitle>
        </Speedbar>
        <RedDivider />
        <Speedbar>
          <StatValue>620mi</StatValue>
          <SectionSubTitle>Range</SectionSubTitle>
        </Speedbar>
      </SpeedStatContainer>
    </SpeedContainer>
  );
}

export default Speed;
