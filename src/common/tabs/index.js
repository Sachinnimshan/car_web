import React, { useState } from "react";
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
      {mobile ? (
        <MobileTabSelector>
          {data?.map((tab, index) => (
            <option
              key={tab?.title}
              value={tab?.title}
            >
              {tab?.title}
            </option>
          ))}
        </MobileTabSelector>
      ) : (
        <TabHeader mobile={mobile}>
          {data?.map((tab) => (
            <Tab
              onClick={() => setActiveTab(tab)}
              active={activeTab === tab}
              key={tab?.title}
            >
              {tab?.title}
            </Tab>
          ))}
        </TabHeader>
      )}

      <TabPanel>{children}</TabPanel>
    </TabContainer>
  );
}

export default Tabs;
