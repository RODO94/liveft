import Header from "./components/Header";

import { LiftsSection } from "./components/LiftsSection";

export const Home = ({ name }: { name: string }) => {
  return (
    <>
      <Header name={name} />
      <LiftsSection />
    </>
  );
};
