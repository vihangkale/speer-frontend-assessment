import { Card, Stack } from "@mui/material";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallMissedIcon from "@mui/icons-material/CallMissed";
const callCardStyle = {
  p: 2,
  borderRadius: 2,
  minHeight: 50,
};
const CallCard = ({ data }) => {
  const { direction, call_type } = data;
  const callIconRender = () => {
    if (direction === "inbound") {
      return call_type === "missed" ? (
        <PhoneMissedIcon />
      ) : call_type === "answered" ? (
        <PhoneCallbackIcon />
      ) : null;
    }
    if (direction === "outbound") {
      return call_type === "missed" ? (
        <CallMissedIcon />
      ) : call_type === "answered" ? (
        <CallMadeIcon />
      ) : null;
    }
  };
  return (
    <Card sx={callCardStyle}>
      <Stack rowGap={1}>{callIconRender()}</Stack>
    </Card>
  );
};
export default CallCard;
