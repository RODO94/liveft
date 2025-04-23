import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Logo from "../../../ui/components/Logo";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";

export default function Header({ name }: { name: string }) {
  return (
    <Box
      component={"header"}
      pt={2}
      display={"flex"}
      flexDirection={"column"}
      gap={1}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Logo />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Typography variant="h2">{`Hi, ${name}`}</Typography>
          <Typography variant="body2">Live your lift, baby</Typography>
        </Box>
        <BlurCircularIcon />
      </Box>
    </Box>
  );
}
