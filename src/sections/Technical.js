import React, { useState } from "react";
import { technicalData } from "../common/common";
import Tabs from "../common/tabs";
import {
  SectionHeader,
  SectionTitle,
  SectionTitleContainer,
} from "../styles/typography";
import {
  TechnicalContainer,
  TechnicalItem,
  TechnicalItemContainer,
  TechnicalItemText,
} from "./sections.styled";

function Technical({ mobile }) {
  const [activeTab, setActiveTab] = useState(technicalData[0]);
  return (
    <TechnicalContainer mobile={mobile}>
      <SectionTitleContainer>
        <SectionHeader>Technical</SectionHeader>
        <SectionTitle>SPECIFICATIONS</SectionTitle>
      </SectionTitleContainer>
      <Tabs
        data={technicalData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <TechnicalItemContainer>
          {activeTab?.data?.map((stat, index) => (
            <TechnicalItem
              key={index}
              borderBottom={index + 1 !== activeTab?.data?.length}
            >
              <TechnicalItemText>{stat.title}</TechnicalItemText>
              <TechnicalItemText>{stat?.value}</TechnicalItemText>
            </TechnicalItem>
          ))}
        </TechnicalItemContainer>
      </Tabs>
    </TechnicalContainer>
  );
}

export default Technical;
