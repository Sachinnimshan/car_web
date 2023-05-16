import React from "react";
import { SelectBoxContainer } from "./select.styled";

function SelectBox({ data }) {
  return (
    <SelectBoxContainer>
      {data?.map((item, index) => (
        <option key={index}>{item?.title}</option>
      ))}
      
    </SelectBoxContainer>
  );
}

export default SelectBox;
