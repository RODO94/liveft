import { Enter } from "./EntranceActions/Enter";
import { Password } from "./EntranceActions/Password";
import { UserSelect } from "./EntranceActions/UserSelect";
import { EntranceActionProps } from "./EntranceActions/types";

export default function EntranceActions(props: EntranceActionProps) {
  // This component is responsible for rendering the correct action component based on the action prop.

  return (
    <>
      <Enter {...props} />
      <Password {...props} />
      <UserSelect {...props} />
    </>
  );
}
