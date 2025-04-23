import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { theme } from "../theme";

export default function LargeButton({
  text,
  handleClick,
}: {
  text: string;
  handleClick?: () => void;
}) {
  return (
    <Button
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 2.5,
        px: 12,
        borderRadius: 1,
        background: theme.palette.background.transparent,
        color: theme.palette.text.primary,
      }}
      fullWidth
      onClick={handleClick}
      aria-label="Enter the app"
    >
      <Typography variant="h3">{text}</Typography>
    </Button>
  );
}
