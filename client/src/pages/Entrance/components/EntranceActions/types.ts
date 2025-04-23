import { SetStateFunction } from "../../../../types/utils";
import { JSX } from "react";

export type ActionTypes = "enter" | "password" | "userSelect";

export type EntranceActionProps = {
  action: ActionTypes;
  setAction: SetStateFunction<ActionTypes>;
};

export type EntranceActionComponent = (
  props: EntranceActionProps
) => JSX.Element | null;
