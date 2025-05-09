import Dialog from "@mui/material/Dialog";
import { SetStateFunction } from "../../../types/utils";
import { PropsWithChildren } from "react";

export default function LiftModalBase({
  open,
  handleClose,
  children,
}: {
  open: boolean;
  handleClose: SetStateFunction<boolean>;
} & PropsWithChildren) {
  return (
    <Dialog
      aria-hidden={!open}
      open={open}
      onClose={() => handleClose(false)}
      fullWidth
      maxWidth="sm"
    >
      {children}
    </Dialog>
  );
}
