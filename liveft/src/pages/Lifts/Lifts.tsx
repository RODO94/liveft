import { Container } from "@mui/material";
import LastLift from "./components/LastLift";
import LiftTracker from "./components/LiftTracker";
import WeightSlider from "./components/WeightSlider";

export default function Lifts() {
  /**
   * Within this component we need a record of lifts
   * We need a weight calculator based off max weight
   * We need a lift counter and target tracker
   */
  return (
    <Container>
      <LastLift />
      <WeightSlider />
      <LiftTracker />
    </Container>
  );
}
