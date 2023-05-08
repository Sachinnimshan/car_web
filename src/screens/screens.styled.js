import styled from "@emotion/styled";
import {
  PADDING_DESKTOP,
  PADDING_MOBILE,
  SECONDARY_COLOR,
} from "../styles/theme";

export const MainLayoutContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const HomeContainer = styled("div")`
  display: flex;
  background-image: url(/images/home_banner.jpg);
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  min-height: 97vh;
  padding: ${(props) =>
    props.mobile ? `1rem ${PADDING_MOBILE}` : `1rem ${PADDING_DESKTOP}`};
`;

export const HeroBanner = styled("div")`
  overflow: hidden;
  min-width: 700px;
`;

export const TypeHightlight = styled("span")`
  color: ${SECONDARY_COLOR};
`;

export const HomeInfoContainer = styled("div")`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
