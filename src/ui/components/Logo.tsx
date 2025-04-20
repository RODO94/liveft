import Box from "@mui/material/Box";
import LogoTitle from "./LogoTitle";

export default function Logo() {
  return (
    <Box
      component={"header"}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      width={"fit-content"}
      gap={0}
    >
      <LogoTitle title="Li" position="flex-start" />
      <LogoTitle title="_ve" position="center" />
      <LogoTitle title="_ft" position="flex-end" />
    </Box>
  );
}
