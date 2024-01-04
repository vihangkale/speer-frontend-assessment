import { Box, Stack } from "@mui/material";
import CallCard from "./callCard";
import Header from "./header";

const ActivityFeed = ({ callData }) => {
  const handleAchiveAllClick = () => {};
  return (
    <Box>
      <Header
        title="Activity Feed"
        btnText="Archive All"
        onClickBtn={handleAchiveAllClick}
      />
      <Stack rowGap={2} mt={2}>
        {callData.map(({}) => (
          <CallCard />
        ))}
      </Stack>
    </Box>
  );
};
export default ActivityFeed;
