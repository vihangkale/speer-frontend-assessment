import { Card, IconButton, Stack, Typography } from "@mui/material";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallMissedIcon from "@mui/icons-material/CallMissed";
import VoicemailIcon from "@mui/icons-material/Voicemail";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallIcon from "@mui/icons-material/Call";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PublicIcon from "@mui/icons-material/Public";
const callCardStyle = {
  p: 2,
  borderRadius: 2,
  boxShadow:
    "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
  display: "flex",
};
const CallCard = ({ data, archiveUnarchiveClick }) => {
  const { id, from, to, via, direction, call_type, duration, is_archived } =
    data;
  const convertSecToMinFormat = (seconds) => {
    if (seconds >= 60) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes} minutes ${remainingSeconds} seconds`;
    } else {
      return `${seconds} seconds`;
    }
  };
  const callIconRender = () => {
    if (direction === "inbound") {
      return call_type === "missed" ? (
        <PhoneMissedIcon />
      ) : call_type === "answered" ? (
        <PhoneCallbackIcon />
      ) : call_type === "voicemail" ? (
        <Stack>
          <CallReceivedIcon />
          <VoicemailIcon />
        </Stack>
      ) : null;
    }
    if (direction === "outbound") {
      return call_type === "missed" ? (
        <CallMissedIcon />
      ) : call_type === "answered" ? (
        <CallMadeIcon />
      ) : call_type === "voicemail" ? (
        <Stack>
          <CallMadeIcon />
          <VoicemailIcon />
        </Stack>
      ) : null;
    }
  };
  return (
    <Card key={id ?? ""} sx={callCardStyle}>
      <Stack sx={{ width: "95%" }} rowGap={1}>
        <Stack direction="row" columnGap={1}>
          <CallIcon /> <Typography>From:</Typography>{" "}
          <Typography>{from}</Typography>
        </Stack>
        <Stack direction="row" columnGap={1}>
          <PhoneIphoneIcon /> <Typography>To:</Typography>{" "}
          <Typography>{to}</Typography>
        </Stack>
        <Stack direction="row" columnGap={1}>
          <PublicIcon /> <Typography>Via:</Typography>{" "}
          <Typography>{via}</Typography>
        </Stack>
        <Stack direction="row" columnGap={1}>
          <AccessTimeIcon /> <Typography>Duration:</Typography>{" "}
          <Typography>{convertSecToMinFormat(duration)}</Typography>
        </Stack>
      </Stack>
      <Stack sx={{ width: "5%" }}>
        <Stack rowGap={1} sx={{ mb: "auto" }}>
          {callIconRender()}
        </Stack>
        <IconButton onClick={() => archiveUnarchiveClick(id)}>
          {is_archived ? (
            <UnarchiveIcon sx={{ color: "#1976d2", mt: "auto" }} />
          ) : (
            <ArchiveIcon sx={{ color: "#1976d2", mt: "auto" }} />
          )}
        </IconButton>
      </Stack>
    </Card>
  );
};
export default CallCard;
