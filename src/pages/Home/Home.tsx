import Header from "./components/Header";

import { LiftsSection } from "./components/LiftsSection";
import Container from "@mui/material/Container";

export const Home = ({ name }: { name: string }) => {
  return (
    <Container maxWidth="md" sx={{ height: "100%", width: "100%" }}>
      <Header name={name} />
      <LiftsSection />
    </Container>
  );
};
