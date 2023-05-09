import styled from "@emotion/styled";
import { BG_COLOR, FONT_DARK, PRIMARY_COLOR, SECONDARY_COLOR } from "./theme";

export const SectionHeader = styled("span")`
  color: ${SECONDARY_COLOR};
  font-size: 2rem;
`;

export const SectionTitle = styled("span")`
  font-weight: 700;
  font-size: calc(16px + 4vw);
  color: ${(props) => props.color};
  text-transform: uppercase;
`;

export const SectionSubTitle = styled("span")`
  font-weight: 400;
  font-size: calc(16px + 1vw);
  color: ${(props) => props.color || FONT_DARK};
`;

export const SectionText = styled("p")`
  font-size: calc(16px + 0.09vw);
  color: ${FONT_DARK};
  font-weight: 400;
`;

export const HomePageHeader = styled("span")`
  font-weight: 500;
  color: ${BG_COLOR};
  font-size: calc(16px + 2vw);
`;

export const ButtonText = styled("span")`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const ButtonIcon = styled("div")`
  color: ${(props) => props.color || PRIMARY_COLOR};
  background-color: ${(props) => props.bgrColor || BG_COLOR};
  font-size: 1.75rem;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
`;
