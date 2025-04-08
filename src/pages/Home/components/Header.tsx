import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Logo from "../../../ui/components/Logo";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";

export default function Header({ name }: { name: string }) {
  return (
    <header>
      <Container>
        <Logo />
      </Container>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display={"flex"} flexDirection={"column"} gap={0.5}>
          <Typography component={"h2"}>{`Hi, ${name}`}</Typography>
          <Typography component={"h3"}>Live your lift, baby</Typography>
        </Box>
        <BlurCircularIcon />
      </Box>
    </header>
  );
}
