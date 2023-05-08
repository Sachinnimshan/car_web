import styled from "@emotion/styled";
import {
    BG_COLOR,
  FONT_DARK,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from "./theme";

export const SectionHeader = styled("span")`
  color: ${SECONDARY_COLOR};
  font-size: 2rem;
`;

export const SectionTitle = styled("span")`
  font-weight: 700;
  font-size: 4rem;
  color: ${(props) => props.color};
  text-transform: uppercase;
`;

export const SectionSubTitle = styled("span")`
  font-weight: 400;
  font-size: 2rem;
  color: ${(props) => props.color};
  text-transform: uppercase;
`;

export const SectionText = styled("span")`
  font-size: 15px;
  color: ${FONT_DARK};
  font-weight: 500;
`;

export const HomePageHeader = styled("span")`
  font-weight: 500;
  color: ${BG_COLOR};
  font-size: 2.5rem;
`;
