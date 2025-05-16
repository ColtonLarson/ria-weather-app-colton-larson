import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

const TabNav = (props: {
  tabs: string[];
  getWeatherByIndex: (index: number) => Promise<void>;
}) => {
  const [selectedTab, setSelectedTab] = React.useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    props.getWeatherByIndex(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        aria-label="cities"
        TabIndicatorProps={{ sx: { backgroundColor: "#f84b24" } }}
        sx={{ color: "#000" }}
        textColor="secondary"
        indicatorColor="secondary"
      >
        {props?.tabs?.map((tab) => (
          <Tab label={tab} sx={{ fontWeight: 600 }} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabNav;
