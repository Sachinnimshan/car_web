import React, { useState } from "react";
import { engineData } from "../common/common";
import Tabs from "../common/tabs";
import { EngineImg } from "../images";
import {
  SectionHeader,
  SectionSubTitle,
  SectionText,
  SectionTitle,
  SectionTitleContainer,
} from "../styles/typography";
import {
  EngineContainer,
  EngineImage,
  EngineLeft,
  EngineSpecContainer,
  EngineSpecItem,
  EngineSpecTitle,
  EngineSpecValue,
} from "./sections.styled";

function Engine({ mobile }) {
  const [activeTab, setActiveTab] = useState(engineData[0]);
  return (
    <EngineContainer mobile={mobile}>
      <EngineLeft>
        <SectionTitleContainer>
          <SectionHeader>Performance</SectionHeader>
          <SectionTitle>WXQ100 ENGINE</SectionTitle>
          <SectionSubTitle>With 1600Nm@2000-6000rpm Max Torque</SectionSubTitle>
        </SectionTitleContainer>
        <SectionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          condimentum suscipit nisi, eu pellentesque tortor viverra ut.
        </SectionText>
        <Tabs
          data={engineData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          <EngineSpecContainer>
            {activeTab?.engSpec?.map((stat) => (
              <EngineSpecItem>
                <EngineSpecValue>{stat.value}</EngineSpecValue>
                <EngineSpecTitle>{stat?.title}</EngineSpecTitle>
              </EngineSpecItem>
            ))}
          </EngineSpecContainer>
        </Tabs>
      </EngineLeft>
      <EngineImage src={EngineImg} />
    </EngineContainer>
  );
}

export default Engine;
