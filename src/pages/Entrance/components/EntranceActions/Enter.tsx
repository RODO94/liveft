import LargeButton from "../../../../ui/components/LargeButton";
import { EntranceActionComponent } from "./types";
export const Enter: EntranceActionComponent = ({ action, setAction }) => {
  if (action !== "enter") return null;
  return <LargeButton text="Enter" handleClick={() => setAction("password")} />;
};
