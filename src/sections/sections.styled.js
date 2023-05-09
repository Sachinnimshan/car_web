import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import {
  BG_COLOR,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from "../styles/theme";

export const MainLayoutContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

//////////////////HOME//////////////////////////////////////////////////////////

export const HomeContainer = styled("div")`
  display: flex;
  background-image: url(/images/home_banner.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 3;
  height: 97vh;
  padding: ${(props) =>
    props.mobile ? `1rem ${PADDING_MOBILE}` : `1rem ${PADDING_DESKTOP}`};
`;

export const HeroBanner = styled("div")`
  z-index: 5;
`;

export const TypeHightlight = styled("span")`
  color: ${SECONDARY_COLOR};
`;

export const FadeText = styled("h1")`
  font-size: calc(16px + 12vw);
  font-weight: 700;
  text-transform: uppercase;
  position: absolute;
  color: ${BG_COLOR};
  letter-spacing: 2px;
  opacity: 0.1;
  z-index: 1;
  margin-top: 7rem;
`;

const fogAnimation = keyframes`
0% {
  background-position: -200% center;
}
100% {
  background-position: 0% center;
}
`;

export const Fog = styled("div")`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: url(/images/fog.png) repeat-x;
  background-size: 200% auto;
  background-position: 0 bottom;
  animation: ${fogAnimation} 15s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  z-index: 1;
`;

export const HomeInfoContainer = styled("div")`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 3;
`;
//////////////////Home//////////////////////////////////////////////////////////

//////////////////SPEED//////////////////////////////////////////////////////////

export const SpeedContainer = styled("div")`
  background-color: ${WHITE_COLOR};
  padding: ${(props) =>
    props.mobile ? `3rem ${PADDING_MOBILE}` : `3rem ${PADDING_DESKTOP}`};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SpeedStatContainer = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const Speedbar = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const RedDivider = styled("div")`
  background-color: ${SECONDARY_COLOR};
  height: 3rem;
  width: 4px;
`;

export const StatValue = styled("span")`
  font-weight: 700;
  font-size: calc(16px + 2vw);
`;

//////////////////SPEED//////////////////////////////////////////////////////////

//////////////////ABOUT//////////////////////////////////////////////////////////\

export const AboutContainer = styled("div")`
  padding: ${(props) =>
    props.mobile ? `1rem ${PADDING_MOBILE}` : `1rem ${PADDING_DESKTOP}`};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const AboutRight = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

//////////////////ABOUT//////////////////////////////////////////////////////////
