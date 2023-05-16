import React from "react";
import { dealerData, engineData, technicalData } from "../common/common";
import SelectBox from "../common/select";
import { SectionText, SectionTitle } from "../styles/typography";
import {
  DealerContainer,
  SearchContainer,
  SubmitButton,
} from "./sections.styled";

function Dealer({ mobile }) {
  return (
    <DealerContainer mobile={mobile}>
      <SectionTitle>Find Dealer</SectionTitle>
      <SectionText>
        Now, it’s easier to locate dealer closest to you. Select and search –
        That’s it!
      </SectionText>
      <SearchContainer mobile={mobile}>
        <SelectBox data={dealerData.countries} />
        <SelectBox data={dealerData.state} />
        <SelectBox data={dealerData.cities} />
        <SubmitButton>Submit</SubmitButton>
      </SearchContainer>
    </DealerContainer>
  );
}

export default Dealer;
