import { Box, Button, Typography } from "@mui/material";
const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  p: 2,
  borderRadius: 0,
  background: "#fafafa",
};
const Header = ({
  title = "",
  btnText = "",
  onClickBtn = null,
  icon: Icon,
  filteredData,
}) => {
  return (
    <Box sx={headerStyle}>
      <Typography variant="h6"> {title}</Typography>
      <Button
        startIcon={<Icon />}
        onClick={onClickBtn}
        disabled={filteredData.length === 0}
      >
        {btnText}
      </Button>
    </Box>
  );
};
export default Header;
