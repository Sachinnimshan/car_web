import React from "react";
import { ArrowNextIcon, ArrowPrevIcon } from "../../icons";
import { SlideShowBtn, SlideShowButtonContainer } from "./slidebtn.styled";

function SlideControls({
  onClickNext,
  onClickPrevious,
  color,
  bgrColor,
  border,
  hoverColor
}) {
  return (
    <SlideShowButtonContainer>
      <SlideShowBtn
        onClick={onClickPrevious}
        color={color}
        bgrColor={bgrColor}
        border={border}
        hoverColor={hoverColor}
      >
        <ArrowPrevIcon />
      </SlideShowBtn>
      <SlideShowBtn
        onClick={onClickNext}
        color={color}
        bgrColor={bgrColor}
        border={border}
        hoverColor={hoverColor}
      >
        <ArrowNextIcon />
      </SlideShowBtn>
    </SlideShowButtonContainer>
  );
}

export default SlideControls;
