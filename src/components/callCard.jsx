import { Card, Stack } from "@mui/material";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import VoicemailIcon from "@mui/icons-material/Voicemail";
const callCardStyle = {
  p: 2,
};
const CallCard = () => {
  return (
    <Card sx={callCardStyle}>
      <Stack rowGap={1}>
        <PhoneCallbackIcon />
      </Stack>
    </Card>
  );
};
export default CallCard;
