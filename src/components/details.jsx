import { Box, Grid, Typography } from "@mui/material";
import CallCard from "./callCard";
import SkeletonLoader from "./skeletonLoader";
const containerStyle = { background: "#fafafa", flexGrow: 1, p: 2 };
const Details = ({ data, archiveUnarchiveClick, loading }) => {
  return (
    <Box sx={containerStyle}>
      {loading ? (
        <Grid container spacing={2}>
          {Array.from({ length: 25 }).map((_, index) => (
            <Grid key={index} item xs={12} sm={6} md={6} lg={4} xl={3} xxl={3}>
              <SkeletonLoader height={152} />
            </Grid>
          ))}
        </Grid>
      ) : data.length === 0 ? (
        <Typography variant="h1">No Data To Display</Typography>
      ) : (
        <Grid container spacing={2}>
          {data.map((callObj) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} xxl={3}>
              <CallCard
                data={callObj}
                archiveUnarchiveClick={archiveUnarchiveClick}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};
export default Details;
