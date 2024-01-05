import { Box } from "@mui/material";
import Header from "./header";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import Details from "./details";
const containerStyle = {
  height: "100%",
};
const ActivityFeed = ({ callData, setCallsData, updateCall, loading }) => {
  const handleAchiveAllClick = () => {
    const archivePromises = [];
    filteredData.forEach(({ id }) => {
      archivePromises.push(updateCall(id, true));
    });
    setCallsData((prevData) => {
      const data = [...prevData];
      return data.map((dataObj) => ({ ...dataObj, is_archived: true }));
    });
    Promise.all(archivePromises)
      .then((responses) => {
        // Handle responses if needed
        console.log("All records archived successfully!", responses);
      })
      .catch((error) => {
        // Handle errors if any of the requests fail
        console.error("Error archiving records:", error);
      });
  };
  const filteredData = callData.filter(({ is_archived }) => !is_archived);

  const handleArchiveClick = (id) => {
    updateCall(id, true);
    setCallsData((prevData) => {
      const data = [...prevData];
      return data.map((dataObj) =>
        dataObj.id ? { ...dataObj, is_archived: true } : dataObj
      );
    });
  };
  return (
    <Box sx={containerStyle}>
      <Header
        title="Activity Feed"
        btnText="Archive All"
        onClickBtn={handleAchiveAllClick}
        icon={UnarchiveIcon}
        filteredData={filteredData}
      />
      <Details
        data={filteredData}
        archiveUnarchiveClick={handleArchiveClick}
        loading={loading}
      />
    </Box>
  );
};
export default ActivityFeed;
