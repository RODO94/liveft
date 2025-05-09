import { DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { PropsWithChildren } from "react";

export default function LiftModalHeader({
  title,
  subtitle,
  children,
}: { title: string; subtitle: string } & PropsWithChildren) {
  return (
    <>
      <DialogTitle variant="h2" color="black">
        {title}
      </DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <DialogContentText variant="body2">{subtitle}</DialogContentText>
        {children}
      </DialogContent>
    </>
  );
}
