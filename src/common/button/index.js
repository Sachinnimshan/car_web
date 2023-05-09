import React from "react";
import { ButtonContainer} from "./button.styled";
import {FiArrowRight} from 'react-icons/fi';
import { ButtonIcon, ButtonText } from "../../styles/typography";

function Button({ text, icon = <FiArrowRight/> }) {
  return (
    <ButtonContainer>
      <ButtonText>{text}</ButtonText>
      <ButtonIcon>{icon}</ButtonIcon>
    </ButtonContainer>
  );
}

export default Button;
