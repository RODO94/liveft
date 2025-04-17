import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: theme.palette.text.secondary,
    padding: "4px 4px",
    backgroundColor: theme.palette.background.transparent,
  },
}));
