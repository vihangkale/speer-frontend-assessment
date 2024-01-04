import { Box, Stack } from "@mui/material";
import Header from "./header";
import CallCard from "./callCard";

const Archived = ({ callData }) => {
  const handleUnAchiveAllClick = () => {};
  return (
    <Box>
      <Header
        title="Archived"
        btnText="Unarchive All"
        onClickBtn={handleUnAchiveAllClick}
      />
      <Stack rowGap={2} mt={2}>
        {callData.map(({}) => (
          <CallCard />
        ))}
      </Stack>
    </Box>
  );
};
export default Archived;
