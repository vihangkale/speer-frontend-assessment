//import mui
import { useEffect, useState } from "react";
import { Box, Paper } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import PhoneIcon from "@mui/icons-material/Phone";
//import components
import MuiTabs from "./components/tabs";
import ActivityFeed from "./components/ActivityFeed";
import Archived from "./components/archived";
//import third party libraries
import axios from "axios";
//import constants
import { baseURL, activitiesUrl } from "./constants/apiUrls";

const ContainerStyle = {
  height: "100%",
};
const PaperStyle = {
  height: "100%",
  borderRadius: 1,
};

function App() {
  const [callData, setCallsData] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getCallData();
  }, []);
  const updateCall = (id, isArchive) => {
    const url = `${baseURL + activitiesUrl}/${id}`;
    const payload = {
      is_archived: isArchive,
    };
    axios.patch(url, payload).then((response) => {});
  };
  const tabsData = [
    {
      label: "Activity Feed",
      content: (
        <ActivityFeed
          callData={callData}
          setCallsData={setCallsData}
          updateCall={updateCall}
          loading={loading}
        />
      ),
      icon: PhoneIcon,
    },
    {
      label: "Archived",
      content: (
        <Archived
          callData={callData}
          setCallsData={setCallsData}
          updateCall={updateCall}
          loading={loading}
        />
      ),
      icon: ArchiveIcon,
    },
  ];
  const getCallData = () => {
    setLoading(true);
    const url = `${baseURL + activitiesUrl}`;
    axios
      .get(url)
      .then((response) => {
        setCallsData(response.data);
      })
      .finally(() => setLoading(false));
  };
  const getCallDetails = (id) => {
    const url = `${baseURL + activitiesUrl}/${id}`;
    axios.get(url).then((response) => {
      setCallsData(response.data);
    });
  };

  return (
    <Box sx={ContainerStyle}>
      <Paper sx={PaperStyle}>
        <MuiTabs tabs={tabsData} />
      </Paper>
    </Box>
  );
}

export default App;
