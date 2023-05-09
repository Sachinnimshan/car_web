import styled from "@emotion/styled/macro";
import { BG_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from "../../styles/theme";
import { ButtonIcon } from "../../styles/typography";

export const ButtonContainer = styled("div")`
  border-radius: 2rem;
  padding: 0.25rem 0.25rem 0.25rem 1rem;
  background-color: ${(props) => props.bgrColor || SECONDARY_COLOR};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 3px solid transparent;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  color: ${(props) => props.color || BG_COLOR};
  :hover {
    border: 3px solid ${SECONDARY_COLOR};
    background-color: ${BG_COLOR};
    transition: all ease-in-out 0.3s;
    color: ${PRIMARY_COLOR};
    ${ButtonIcon}{

    }
  }
`;


