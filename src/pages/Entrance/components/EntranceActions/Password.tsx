import { Box, InputLabel } from "@mui/material";
import { StyledTextField } from "../../../../ui/components/StyledTextField";
import { theme } from "../../../../ui/theme";

export default function Password() {
  return (
    <Box display={"flex"} flexDirection="column" gap={2} width="100%">
      <InputLabel
        sx={{ color: theme.palette.text.primary }}
        htmlFor={"password"}
        aria-description="Enter a passord"
      >
        Enter the password
      </InputLabel>
      <StyledTextField
        name="password"
        id="password"
        type="password"
        variant="standard"
        color="secondary"
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: 1,
          outline: "none",
        }}
      />
    </Box>
  );
}
