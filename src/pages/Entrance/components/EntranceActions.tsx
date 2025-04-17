import { Button, Typography } from "@mui/material";
import { theme } from "../../../ui/theme";

export default function EntranceActions() {
  return (
    <>
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
        <Typography variant="h3">Enter</Typography>
      </Button>{" "}
    </>
  );
}
