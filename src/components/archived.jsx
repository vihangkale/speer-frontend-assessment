import { Box, Stack } from "@mui/material";
import Header from "./header";
import CallCard from "./callCard";
const containerStyle = {
  height: "100%",
};
const Archived = ({ callData }) => {
  const handleUnAchiveAllClick = () => {};
  return (
    <Box sx={containerStyle}>
      <Header
        title="Archived"
        btnText="Unarchive All"
        onClickBtn={handleUnAchiveAllClick}
      />
      <Stack rowGap={2} mt={2} p={2}>
        {callData.map((callObj) => (
          <CallCard data={callObj} />
        ))}
      </Stack>
    </Box>
  );
};
export default Archived;
