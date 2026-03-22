import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import { StyledTextField } from "../../../../ui/components/StyledTextField";
import { theme } from "../../../../ui/theme";
import { EntranceActionComponent } from "./types";
import { useState } from "react";

export const Password: EntranceActionComponent = ({ action, setAction }) => {
  const [passwordValue, setPasswordValue] = useState<string>("");
  if (action !== "password") return null;
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      gap={2}
      width="100%"
      maxWidth={"450px"}
    >
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
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        type="password"
        variant="standard"
        color="secondary"
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: 1,
          outline: "none",
        }}
      />
      <Button
        disabled={Boolean(
          passwordValue !== import.meta.env.VITE_ENTRANCE_PASSWORD
        )}
        variant="contained"
        onClick={() => setAction("userSelect")}
        color="info"
      >
        <Typography variant="body2" color="black">
          Submit password
        </Typography>
      </Button>
    </Box>
  );
};
