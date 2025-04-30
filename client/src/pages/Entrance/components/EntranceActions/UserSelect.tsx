import { useNavigate } from "@tanstack/react-router";
import LargeButton from "../../../../ui/components/LargeButton";
import { EntranceActionComponent } from "./types";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { getUsers } from "../../../../requests/users";
import { UserBase } from "../../../../types/users";

export const UserSelect: EntranceActionComponent = ({ action }) => {
  const [users, setUsers] = useState<UserBase[] | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();
      if (response.success) {
        setUsers(response.data);
      }
      if (!response.success) console.error(response.error);
    };
    if (!users) fetchUsers();
  }, [users]);
  if (action !== "userSelect") return null;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={4}
      width={"100%"}
      maxWidth={"450px"}
    >
      {users &&
        users.map((user) => (
          <LargeButton
            key={user.id}
            text={user.name}
            handleClick={() => {
              window.sessionStorage.setItem("userId", user.id);
              window.sessionStorage.setItem("name", user.name);
              navigate({ to: "/home" });
            }}
          />
        ))}
    </Box>
  );
};
