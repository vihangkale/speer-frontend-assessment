import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const navTopStyle = { position: "sticky", top: 0, zIndex: 1 };
const MuiTabs = ({ tabs = [] }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ height: "100%" }}>{children}</Box>}
      </div>
    );
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={navTopStyle}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.length > 0 &&
            tabs.map(({ label, icon: Icon }, index) => (
              <Tab
                iconPosition="start"
                icon={<Icon />}
                label={label}
                id={`simple-tab-${index}`}
              />
            ))}
        </Tabs>
      </Paper>
      {tabs.length > 0 &&
        tabs.map(({ content }, index) => (
          <CustomTabPanel key={Math.random(2)} value={value} index={index}>
            {content}
          </CustomTabPanel>
        ))}
    </Box>
  );
};
export default MuiTabs;
