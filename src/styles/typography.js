import styled from "@emotion/styled";
import { BG_COLOR, FONT_DARK, PRIMARY_COLOR, SECONDARY_COLOR } from "./theme";

export const SectionHeader = styled("span")`
  color: ${SECONDARY_COLOR};
  font-size: calc(1rem + 1.25vw);
  text-transform: uppercase;
  display: inline-block;
`;

export const SectionTitle = styled("span")`
  font-weight: 700;
  font-size: calc(1rem + 4vw);
  color: ${(props) => props.color || PRIMARY_COLOR};
  text-transform: uppercase;
`;

export const SectionSubTitle = styled("span")`
  font-weight: 400;
  font-size: calc(1rem + 0.75vw);
  color: ${(props) => props.color || "#333333"};
`;

export const SectionText = styled("p")`
  font-size: calc(1rem + 0.2vw);
  color: ${(props) => props.color || FONT_DARK};
  font-weight: 400;
  text-align: justify;
  line-height: 2rem;
  font-style: ${(props) => props.italic && "italic"};
  margin-bottom: ${(props) => props.marginBottom && "1rem"};
`;

export const SectionTitleContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const SectionTitleTop = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const HomePageHeader = styled("span")`
  font-weight: 500;
  color: ${BG_COLOR};
  font-size: calc(1rem + 2vw);
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
