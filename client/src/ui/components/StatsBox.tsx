import Box from "@mui/material/Box";
import { theme } from "../theme";
import { ReactNode } from "react";

interface StatsBoxProps {
  children: ReactNode;
}

export default function StatsBox({ children }: StatsBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "0.5rem",
        backgroundColor: theme.palette.primary.light,
        color: "black",
        p: "0.75rem 0.5rem",
        flexGrow: 1,
        position: "relative",
      }}
    >
      {children}
    </Box>
  );
}
