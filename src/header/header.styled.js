import styled from "@emotion/styled";
import {
  BG_COLOR,
  FONT_DARK,
  FONT_LIGHT,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from "../styles/theme";

export const HeaderContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) =>
    props.mobile ? `1.5rem ${PADDING_MOBILE}` : `1.5rem ${PADDING_DESKTOP}`};
  gap: 2rem;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 1000;
  background-color: ${(props)=> props.scrolledDown && BG_COLOR}
`;

export const HeaderRight = styled("div")`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const HeaderLink = styled("span")`
  font-size: 16px;
  font-weight: 600;
  padding: 0.25rem 0;
  color: ${BG_COLOR};
  border-bottom: 3px solid transparent;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid ${SECONDARY_COLOR};
  }
`;

export const HeaderLinkContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const SocialContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SocialIcon = styled("div")`
  font-size: 18px;
  color: ${(props) => (props.header ? `${FONT_DARK}` : `${BG_COLOR}`)};
  background-color: ${(props) => props.footer && FONT_DARK};
  padding: ${(props) => props.padding && "10px"};
  border-radius: 50%;
  display: flex;
  align-items: center;
`;

export const MenuContainer = styled("div")`
  font-size: 2rem;
  color: ${SECONDARY_COLOR};
  display: flex;
`;
