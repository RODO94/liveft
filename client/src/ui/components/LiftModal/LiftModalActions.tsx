import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";

type LiftModalActions = Record<
  "add" | "cancel" | "update" | "delete",
  () => Promise<void> | void
>;
export default function LiftModalActions({
  actions,
}: {
  actions: Partial<LiftModalActions>;
}) {
  return (
    <DialogActions>
      {actions.cancel && <Button onClick={actions.cancel}>Cancel</Button>}
      {actions.add && (
        <Button type="submit" onClick={actions.add}>
          Add lift
        </Button>
      )}
      {actions.update && (
        <Button type="submit" onClick={actions.update}>
          Update lift
        </Button>
      )}
      {actions.delete && (
        <Button type="submit" onClick={actions.delete}>
          Delete lift
        </Button>
      )}
    </DialogActions>
  );
}
