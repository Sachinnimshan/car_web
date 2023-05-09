import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import {
  BG_COLOR,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  SECONDARY_COLOR,
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
  min-height: 97vh;
  padding: ${(props) =>
    props.mobile ? `1rem ${PADDING_MOBILE}` : `1rem ${PADDING_DESKTOP}`};
`;

export const HeroBanner = styled("div")`
  z-index: 1;
`;

export const TypeHightlight = styled("span")`
  color: ${SECONDARY_COLOR};
`;

export const FadeText = styled("h1")`
  font-size: 12vw;
  font-weight: 700;
  text-transform: uppercase;
  position: absolute;
  color: ${BG_COLOR};
  letter-spacing: 2px;
  opacity: 0.1;
  z-index: 1;
  margin-top: 5rem;
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
  animation: ${fogAnimation} 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  z-index: 1;
`;

export const HomeInfoContainer = styled("div")`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
`;
//////////////////Home//////////////////////////////////////////////////////////

//////////////////SPEED//////////////////////////////////////////////////////////


//////////////////SPEED//////////////////////////////////////////////////////////