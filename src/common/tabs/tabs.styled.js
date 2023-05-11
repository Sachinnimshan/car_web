import styled from "@emotion/styled";
import { BG_COLOR, FONT_DARK, SECONDARY_COLOR } from "../../styles/theme";

export const TabContainer = styled("div")`
  display: flex;
  margin: 2rem 0;
  flex-direction: column;
`;

export const TabHeader = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const Tab = styled("span")`
  font-size: calc(16px + 0.3vw);
  padding-bottom: 1rem;
  font-weight: 400;
  color: "#3B3B3B";
  cursor: pointer;
  transition: all ease-in-out 0.5s;
  border-bottom: ${(props) =>
    props.active ? `3px solid ${SECONDARY_COLOR}` : `3px solid ${BG_COLOR}`};
`;

export const TabPanel = styled("div")``;
