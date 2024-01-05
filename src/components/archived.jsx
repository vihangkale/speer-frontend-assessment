//mui imports
import { Box } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
//component imports
import Header from "./header";
import Details from "./details";
const containerStyle = {
  height: "100%",
};
const Archived = ({ callData, setCallsData, updateCall, loading }) => {
  const filteredData = callData.filter(({ is_archived }) => is_archived);
  const handleUnAchiveAllClick = () => {
    const archivePromises = [];
    filteredData.forEach(({ id }) => {
      archivePromises.push(updateCall(id, true));
    });
    setCallsData((prevData) => {
      const data = [...prevData];
      return data.map((dataObj) => ({ ...dataObj, is_archived: false }));
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
  const handleUnarchiveClick = (id) => {
    updateCall(id, false);
    setCallsData((prevData) => {
      const data = [...prevData];
      return data.map((dataObj) =>
        dataObj.id === id ? { ...dataObj, is_archived: false } : dataObj
      );
    });
  };
  return (
    <Box sx={containerStyle}>
      <Header
        title="Archived"
        btnText="Unarchive All"
        onClickBtn={handleUnAchiveAllClick}
        icon={ArchiveIcon}
        filteredData={filteredData}
      />

      <Details
        data={filteredData}
        archiveUnarchiveClick={handleUnarchiveClick}
        loading={loading}
      />
    </Box>
  );
};
export default Archived;
