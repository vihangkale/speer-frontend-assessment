import { Stack, Button, Typography } from "@mui/material";

const Header = ({ title = "", btnText = "", onClickBtn = null }) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="h6"> {title}</Typography>
      <Button variant="contained" onClick={onClickBtn}>
        {btnText}
      </Button>
    </Stack>
  );
};
export default Header;
