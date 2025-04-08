import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Logo() {
  return (
    <Box component={"header"} display={"flex"} flexDirection={"column"} gap={0}>
      <Typography component={"h1"} sx={{ alignSelf: "flex-start" }}>
        Li
      </Typography>
      <Typography component={"h1"} sx={{ alignSelf: "center" }}>
        _ve
      </Typography>
      <Typography component={"h1"} sx={{ alignSelf: "flex-end" }}>
        _ft
      </Typography>
    </Box>
  );
}
