import { Paper, Button, Typography } from "@mui/material";
const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  position: "sticky",
  top: "49px",
  zIndex: 1,
  p: 2,
  borderRadius: 0,
  borderBottomLeftRadius: 35,
  borderBottomRightRadius: 35,
};
const Header = ({ title = "", btnText = "", onClickBtn = null }) => {
  return (
    <Paper sx={headerStyle}>
      <Typography variant="h6"> {title}</Typography>
      <Button variant="contained" onClick={onClickBtn}>
        {btnText}
      </Button>
    </Paper>
  );
};
export default Header;
