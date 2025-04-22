import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const ColouredButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.action.dormant,
  color: theme.palette.text.primary,
  textTransform: "none",
  "&:hover": {
    backgroundColor: theme.palette.action.active,
  },
}));
