import { useEffect, useState } from "react";
import { Container, Paper } from "@mui/material";
import MuiTabs from "./components/tabs";
import ActivityFeed from "./components/ActivityFeed";
import Archived from "./components/archived";
import axios from "axios";
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
  useEffect(() => {
    getCallData();
  }, []);

  const tabsData = [
    {
      label: "Activity Feed",
      content: <ActivityFeed callData={callData} />,
    },
    {
      label: "Archived",
      content: <Archived callData={callData} />,
    },
  ];
  const getCallData = () => {
    axios.get(baseURL).then((response) => {
      setCallsData(response.data);
    });
  };
  const getCallDetails = (id) => {
    const url = `${baseURL + activitiesUrl}/${id}`;
    axios.get(url).then((response) => {
      setCallsData(response.data);
    });
  };
  const updateCall = (id, isArchive) => {
    const url = `${baseURL + activitiesUrl}/${id}`;
    const payload = {
      is_archived: isArchive,
    };
    axios.put(url, payload).then((response) => {
      setCallsData(response.data);
    });
  };
  return (
    <Container sx={ContainerStyle}>
      <Paper sx={PaperStyle}>
        <MuiTabs tabs={tabsData} />
      </Paper>
    </Container>
  );
}

export default App;
