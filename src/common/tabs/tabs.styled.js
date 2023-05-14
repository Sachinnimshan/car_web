import styled from "@emotion/styled";
import {
  BG_COLOR,
  FONT_DARK,
  FONT_LIGHT,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "../../styles/theme";

export const TabContainer = styled("div")`
  display: flex;
  margin: 2rem 0;
  flex-direction: column;
`;

export const TabHeader = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 0.75rem;
`;

export const Tab = styled("span")`
  font-size: calc(16px + 0.1vw);
  padding-bottom: 1rem;
  font-weight: 400;
  color: ${(props) => (props.active ? "#3B3B3B" : FONT_LIGHT)};
  cursor: pointer;
  transition: all ease-in-out 0.5s;
  border-bottom: ${(props) =>
    props.active ? `3px solid ${SECONDARY_COLOR}` : `3px solid ${BG_COLOR}`};
`;

export const TabPanel = styled("div")``;

export const MobileTabSelector = styled("select")`
  padding: 1rem;
  border: 2px solid ${SECONDARY_COLOR};
  color: ${PRIMARY_COLOR};
  border-radius: 5px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: calc(1rem + 0.5vw);
  margin-bottom: 1rem;
  &:focus{
    outline: none;
  }
`;
