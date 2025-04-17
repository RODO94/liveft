import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function LogoTitle({
  title,
  position,
}: {
  title: string;
  position?: "flex-start" | "center" | "flex-end";
}) {
  return (
    <Box sx={{ height: "10vh" }} display={"flex"} alignItems={position}>
      <Typography component={"h4"} variant="h4">
        {title}
      </Typography>
    </Box>
  );
}
