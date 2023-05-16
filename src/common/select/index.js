import React from "react";
import { SelectBoxContainer } from "./select.styled";

function SelectBox({ data }) {
  return (
    <SelectBoxContainer>
      {data?.map((item) => (
        <option key={item}>{item?.title}</option>
      ))}
      
    </SelectBoxContainer>
  );
}

export default SelectBox;
