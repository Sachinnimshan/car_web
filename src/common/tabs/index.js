import React from "react";
import { Tab, TabContainer, TabHeader, TabPanel } from "./tabs.styled";

function Tabs({ data, children, activeTab, setActiveTab }) {
  return (
    <TabContainer>
      <TabHeader>
        {data?.map((tab) => (
          <Tab onClick={() => setActiveTab(tab)} active={activeTab === tab}>
            {tab?.title}
          </Tab>
        ))}
      </TabHeader>
      <TabPanel>{children}</TabPanel>
    </TabContainer>
  );
}

export default Tabs;
