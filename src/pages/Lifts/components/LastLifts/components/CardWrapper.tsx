import { Box } from "@mui/material";
import React from "react";
import { theme } from "../../../../../ui/theme";

export default function CardWrapper({
  isAddButton = false,
  children,
}: React.PropsWithChildren & { isAddButton?: boolean }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      py={0.25}
      px={0.5}
      bgcolor={isAddButton ? theme.palette.background.transparent : "white"}
      width={"fit-content"}
      justifyContent={"center"}
      minWidth={"64px"}
      borderRadius={"4px"}
    >
      {children}
    </Box>
  );
}
