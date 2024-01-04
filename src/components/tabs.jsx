import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.length > 0 &&
            tabs.map(({ label }, index) => (
              <Tab label={label} id={`simple-tab-${index}`} />
            ))}
        </Tabs>
      </Box>
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
