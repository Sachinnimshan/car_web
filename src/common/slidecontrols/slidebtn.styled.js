import styled from "@emotion/styled";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from "../../styles/theme";

export const SlideShowButtonContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  right: 5%;
  bottom: 5%;
`;

export const SlideShowBtn = styled("div")`
  color: ${(props) => props.color || PRIMARY_COLOR};
  font-size: 1.5rem;
  background-color: ${(props) => props.bgrColor || WHITE_COLOR};
  border-radius: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  transition: all ease-in-out 0.3s;
  border: ${(props) => props.border || `2px solid transparent`};
  &:hover {
    color: ${(props) => props.hoverColor || SECONDARY_COLOR};
    transition: all ease-in-out 0.3s;
    border: 2px solid ${SECONDARY_COLOR};
  }
`;
