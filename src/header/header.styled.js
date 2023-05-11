import styled from "@emotion/styled";
import { carAnimation } from "../sections/sections.styled";
import {
  BG_COLOR,
  FONT_DARK,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from "../styles/theme";

//////////////////////Navigation///////////////////////////

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
  background-color: ${(props) =>
    (props.scrolledDown && WHITE_COLOR) || "transparent"};
  transition: all ease-in-out 0.5s;
  box-shadow: ${(props) =>
    props.scrolledDown &&
    "0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.05)"};
`;

export const NavigationContainer = styled("div")`
  display: flex;
  align-items: center;
`;

export const Backdrop = styled("div")`
  background-color: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(2px);
  width: 100%;
  height: 100vh;
  display: flex;
  right: 0;
  top: 0;
  position: fixed;
  z-index: 1222;
`;

export const NavItemContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.showMenu ? "2rem" : "3rem")};
  flex-direction: ${(props) => props.showMenu && "column"};
  position: ${(props) => props.showMenu && "fixed"};
  top: 0;
  right: 0;
  height: ${(props) => props.showMenu && "100vh"};
  background-color: ${(props) => props.showMenu && WHITE_COLOR};
  padding: ${(props) => props.showMenu && "1.25rem"};
  box-shadow: ${(props) =>
    props.showMenu &&
    "0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.05)"};
`;

export const NavItem = styled("span")`
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

export const SidebarImage = styled("div")`
  max-width: 250px;
  animation-name: ${carAnimation};
  animation-duration: 1s;
  position: relative;
`;

export const SidebarHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CloseContainer = styled("div")`
  color: ${SECONDARY_COLOR};
  font-size: 2rem;
  display: flex;
  cursor: pointer;
`;

export const MenuContainer = styled("div")`
  font-size: 2rem;
  color: ${SECONDARY_COLOR};
  display: flex;
  cursor: pointer;
`;

//////////////////////Navigation///////////////////////////

//////////////////////SOCIAL///////////////////////////

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

//////////////////////SOCIAL///////////////////////////
