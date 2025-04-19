import { useNavigate } from "@tanstack/react-router";
import { userProfiles } from "../../../../data/staticUserData";
import LargeButton from "../../../../ui/components/LargeButton";
import { EntranceActionComponent } from "./types";

export const UserSelect: EntranceActionComponent = ({ action }) => {
  const navigate = useNavigate();
  if (action !== "userSelect") return null;
  return (
    <>
      {userProfiles.map((user) => (
        <LargeButton
          key={user.id}
          text={user.name}
          handleClick={() => {
            window.sessionStorage.setItem("user", user.id);
            navigate({ to: "/home" });
          }}
        />
      ))}
    </>
  );
};
