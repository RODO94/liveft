import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { theme } from "../theme";

export default function LargeButton({ text }: { text: string }) {
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
      onClick={() => {}}
      aria-label="Enter the app"
    >
      <Typography variant="h3">{text}</Typography>
    </Button>
  );
}
