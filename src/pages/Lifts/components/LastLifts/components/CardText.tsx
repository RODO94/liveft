import { Typography } from "@mui/material";
import { theme } from "../../../../../ui/theme";

export default function CardText({
  fontWeight,
  isAddButton,
  text,
}: {
  fontWeight: number;
  isAddButton: boolean;
  text: string;
}) {
  return (
    <Typography
      color={isAddButton ? theme.palette.primary.light : "black"}
      textAlign={"center"}
      variant="body2"
      fontWeight={fontWeight}
    >
      {text}
    </Typography>
  );
}
