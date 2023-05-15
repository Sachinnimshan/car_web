import styled from "@emotion/styled";
import {
  BG_COLOR,
  FONT_DARK,
  FONT_LIGHT,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from "../styles/theme";

export const FooterContainer = styled("div")`
  background-color: ${PRIMARY_COLOR};
  display: flex;
  flex-direction: column;
`;

export const FooterContent = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: ${(props) =>
    props.mobile ? `4rem ${PADDING_MOBILE}` : `4rem ${PADDING_DESKTOP}`};
  flex-wrap: wrap;
`;

export const FooterColumn = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
`;

export const ColumnHeader = styled("span")`
  font-size: 18px;
  color: ${WHITE_COLOR};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
`;

export const FooterLink = styled("span")`
  font-size: 14px;
  color: ${FONT_LIGHT};
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  &:hover {
    color: ${SECONDARY_COLOR};
  }
`;

export const ContactItem = styled("div")`
  display: flex;
  justify-content: start;
  gap: 1rem;
`;

export const ContactIcon = styled("div")`
  color: ${FONT_LIGHT};
  font-size: 22px;
`;

export const ContactInfo = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactInfoHeader = styled("span")`
  font-size: 16px;
  font-weight: 600;
  color: ${BG_COLOR};
`;

export const ContactInfoDesc = styled("p")`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5rem;
  color: ${FONT_LIGHT};
  text-align: justify;
`;

export const CopyRightContainer = styled("div")`
  padding: 2rem 0;
  font-size: 12px;
  text-align: center;
  border-top: 1px solid ${FONT_DARK};
  color: ${FONT_LIGHT};
  padding: ${(props) =>
    props.mobile ? `1.25rem ${PADDING_MOBILE}` : `1.25rem ${PADDING_DESKTOP}`};
`;
