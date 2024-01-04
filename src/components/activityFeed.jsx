import { Box, Stack } from "@mui/material";
import CallCard from "./callCard";
import Header from "./header";

const containerStyle = {
  height: "100%",
};
const ActivityFeed = ({ callData }) => {
  const handleAchiveAllClick = () => {};
  return (
    <Box sx={containerStyle}>
      <Header
        title="Activity Feed"
        btnText="Archive All"
        onClickBtn={handleAchiveAllClick}
      />
      <Stack rowGap={2} mt={2} p={2}>
        {callData.map((callObj) => (
          <CallCard data={callObj} />
        ))}
      </Stack>
    </Box>
  );
};
export default ActivityFeed;
