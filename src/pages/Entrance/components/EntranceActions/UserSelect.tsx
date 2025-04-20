import { useNavigate } from "@tanstack/react-router";
import { userProfiles } from "../../../../data/staticUserData";
import LargeButton from "../../../../ui/components/LargeButton";
import { EntranceActionComponent } from "./types";
import Box from "@mui/material/Box";

export const UserSelect: EntranceActionComponent = ({ action }) => {
  const navigate = useNavigate();
  if (action !== "userSelect") return null;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={4}
      width={"100%"}
      maxWidth={"450px"}
    >
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
    </Box>
  );
};
