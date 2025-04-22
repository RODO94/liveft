import Box from "@mui/material/Box";
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
      py={0.5}
      px={0.5}
      bgcolor={isAddButton ? theme.palette.background.transparent : "white"}
      width={"fit-content"}
      justifyContent={"center"}
      minWidth={"48px"}
      borderRadius={"4px"}
    >
      {children}
    </Box>
  );
}
