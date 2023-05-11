import React, { useState } from "react";
import { CarImageBlack, CarImageRed, CarImageYellow } from "../images";
import {
  SectionHeader,
  SectionText,
  SectionTitle,
  SectionTitleContainer,
  SectionTitleTop,
} from "../styles/typography";
import {
  ColorDot,
  ColorSelector,
  VariationColorCar,
  VariationsContainer,
} from "./sections.styled";

function Variations({mobile}) {
  const carCollection = [
    {
      color: "Red",
      image: CarImageRed,
      code: "#A92323",
    },
    {
      color: "Yellow",
      image: CarImageYellow,
      code: "#C0B715",
    },
    {
      color: "Black",
      image: CarImageBlack,
      code: "#333333",
    },
  ];
  const [selectedColor, setSelectedColor] = useState(carCollection[0]?.image);

  const handleColorSelect = (image) => {
    setSelectedColor(image);
  };

 
  return (
    <VariationsContainer mobile={mobile}>
      <SectionTitleContainer>
        <SectionTitleTop>
          <SectionHeader>CHOOSE THE</SectionHeader>
          <SectionTitle>COLOR YOU LOVE</SectionTitle>
        </SectionTitleTop>
      </SectionTitleContainer>
      <SectionText>
        Wheels ZQ6 offers you multiple option to choose the color you love.
      </SectionText>
      <ColorSelector>
        {carCollection?.map((dot, index) => (
          <ColorDot
            key={dot.color}
            bgrColor={dot.code}
            onClick={() => handleColorSelect(dot.image)}
          />
        ))}
      </ColorSelector>
      <VariationColorCar src={selectedColor} />
    </VariationsContainer>
  );
}

export default Variations;
