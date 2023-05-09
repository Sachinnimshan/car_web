import styled from "@emotion/styled";
import {
  BG_COLOR,
  FONT_DARK,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from "../styles/theme";

export const HeaderContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) =>
    props.mobile ? `1.25rem ${PADDING_MOBILE}` : `1.25rem ${PADDING_DESKTOP}`};
  gap: 2rem;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 1000;
  background-color: ${(props) => props.scrolledDown && WHITE_COLOR};
  transition: all ease-in-out 0.5s;
`;

export const HeaderRight = styled("div")`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const HeaderLink = styled("span")`
  font-size: 15px;
  font-weight: 500;
  padding: 0.25rem 0;
  color: ${(props) =>
    props.scrolledDown ? `${PRIMARY_COLOR}` : `${BG_COLOR}`};
  border-bottom: 4px solid transparent;
  white-space: nowrap;
  cursor: pointer;
  transition: all ease-in-out 0.4s;
  &:hover {
    border-bottom: 4px solid ${SECONDARY_COLOR};
    transition: all ease-in-out 0.4s;
  }
`;

export const HeaderLinkContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const SocialContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SocialIcon = styled("div")`
  font-size: 18px;
  color: ${(props) => props.color || BG_COLOR};
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
