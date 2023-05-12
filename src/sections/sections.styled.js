import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import {
  BG_COLOR,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_COLOR,
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
  background-image: url("/images/home_page.jpg");
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

export const carAnimation = keyframes`
 from {
    right: -5%;
  }
  to {
    right: 0%;
  }
`;

export const HeroBanner = styled("div")`
  z-index: 5;
  animation-name: ${carAnimation};
  animation-duration: 1s;
  position: relative;
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

export const fogAnimation = keyframes`
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
  background: url("/images/fog.png") repeat-x;
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
`;

export const AboutTopSection = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const AboutTopRight = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const AboutBottomContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const AboutBottomLeft = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const AboutRedBanner = styled("div")`
  background-color: ${SECONDARY_COLOR};
  max-width: 425px;
  height: 100%;
  color: ${WHITE_COLOR};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
`;

export const AboutRedBannerText = styled("span")`
  font-weight: 600;
  color: ${WHITE_COLOR};
  font-size: ${(props) =>
    props.small ? "calc(1rem + 0.2vw)" : "calc(2rem + 1vw)"};
`;

export const AboutVideoImg = styled("div")`
  width: 100%;
  max-height: 425px;
  height: 100%;
  height: 500px;
  display: flex;
  background-image: url(${(props) => props.image});
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

export const PlayButton = styled("div")`
  font-size: 3rem;
  color: ${PRIMARY_COLOR};
  background-color: ${WHITE_COLOR};
  border-radius: 50%;
  display: flex;
  padding: 10px;
  align-items: center;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
  &:hover {
    transition: all ease-in-out 0.3s;
    color: ${SECONDARY_COLOR};
  }
`;

export const AboutBottomRight = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const AboutSlideContainer = styled("div")``;

export const SlideShowImg = styled("img")`
  width: 100%;
`;

export const AboutInfoBottom = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 2rem;
`;

//////////////////ABOUT//////////////////////////////////////////////////////////

//////////////////VARIATIONS//////////////////////////////////////////////////////////

export const VariationsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: ${(props) =>
    props.mobile ? `2rem ${PADDING_MOBILE}` : `2rem ${PADDING_DESKTOP}`};
`;

export const VariationColorCar = styled("img")`
  margin-top: 2rem;
`;

export const ColorSelector = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 1rem;
`;

export const ColorDot = styled("div")`
  background-color: ${(props) => props.bgrColor};
  border-radius: 50%;
  width: calc(1rem + 1vw);
  height: calc(1rem + 1vw);
  cursor: pointer;
`;

//////////////////VARIATIONS//////////////////////////////////////////////////////////

//////////////////ENGINE//////////////////////////////////////////////////////////

export const EngineContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding: ${(props) =>
    props.mobile ? `2rem ${PADDING_MOBILE}` : `2rem ${PADDING_DESKTOP}`};
`;

export const EngineLeft = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const EngineImage = styled("img")`
  max-width: 450px;
  width: 100%;
  height: 100%;
`;

export const EngineSpecContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: calc(2rem + 1vw);
  padding: 2rem 0;
`;

export const EngineSpecItem = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

export const EngineSpecValue = styled("span")`
  font-size: calc(16px + 1.5vw);
  font-weight: 700;
  color: "#3B3B3B";
`;

export const EngineSpecTitle = styled("span")`
  font-size: calc(16px + 0.2vw);
  color: "#3B3B3B";
  text-transform: uppercase;
`;

//////////////////ENGINE//////////////////////////////////////////////////////////
