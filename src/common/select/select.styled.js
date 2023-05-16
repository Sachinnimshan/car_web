import styled from "@emotion/styled";
import { DropDownIcon } from "../../icons";
import {
  FONT_DARK,
  FONT_LIGHT,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "../../styles/theme";

export const SelectBoxContainer = styled("select")`
  border-radius: 5rem;
  padding: 15px 20px;
  cursor: pointer;
  flex: 1;
  border: 2px solid ${FONT_LIGHT};
  font-size: calc(1rem + 0.2vw);
  color: ${FONT_DARK};
  padding-right: 1rem;
  appearance: none;
  display: flex;
  background-image: url("/images/downdown.png");
  background-repeat: no-repeat;
  background-position: calc(100% - 1rem) center;
  background-size: 1rem;
  &:focus {
    outline: none;
    border: 2px solid ${PRIMARY_COLOR};
  }
  &::after {
    font-size: 2rem;
  }
`;

