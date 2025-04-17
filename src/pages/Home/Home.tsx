import Box from "@mui/material/Box";
import Header from "./components/Header";

import { LiftsSection } from "./components/LiftsSection";
import Progress from "./components/Progress/Progress";

export const Home = () => {
  return (
    <main
      style={{
        background:
          "var(--primary--gradient, linear-gradient(180deg, #BE3455 0%, #0C0C0C 100%))",
        minHeight: "100vh",
      }}
    >
      <Box display={"flex"} flexDirection={"column"} px={2} py={2} gap={6}>
        <Header name={"Rory"} />
        <LiftsSection />
        <Progress />
      </Box>
    </main>
  );
};
