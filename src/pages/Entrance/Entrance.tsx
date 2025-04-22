import Box from "@mui/material/Box";
import Logo from "../../ui/components/Logo";
import EntranceActions from "./components/EntranceActions";
import { useState } from "react";

export default function Entrance() {
  const [action, setAction] = useState<"enter" | "password" | "userSelect">(
    "enter"
  );
  return (
    <main
      style={{
        background:
          "var(--accent-blue--gradient, linear-gradient(180deg, #3454BE 0%, #0C0C0C 100%))",
        minHeight: "100vh",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        px={2}
        py={2}
        gap={15}
      >
        <Logo />
        <EntranceActions action={action} setAction={setAction} />
      </Box>
    </main>
  );
}
