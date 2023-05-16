import React, { useEffect, useState } from "react";
import useResponsive from "../../hooks/useResponsive";
import {
  MobileTabSelector,
  Tab,
  TabContainer,
  TabHeader,
  TabPanel,
} from "./tabs.styled";

function Tabs({ data, children, activeTab, setActiveTab }) {
  const mobile = useResponsive();

  return (
    <TabContainer>
      <TabHeader mobile={mobile}>
        {data?.map((tab, index) => (
          <Tab
            onClick={() => setActiveTab(tab)}
            active={activeTab === tab}
            key={index}
          >
            {tab?.title}
          </Tab>
        ))}
      </TabHeader>
      <TabPanel>{children}</TabPanel>
    </TabContainer>
  );
}

export default Tabs;
