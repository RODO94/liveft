import LastLift from "./components/LastLift";
import LiftTracker from "./components/LiftTracker";
import WeightSlider from "./components/WeightSlider";
import { useParams } from "@tanstack/react-router";

export default function Lifts() {
  /**
   * Within this component we need a record of lifts
   * We need a weight calculator based off max weight
   * We need a lift counter and target tracker
   */
  const { liftId } = useParams({ strict: false });
  return (
    <main
      style={{
        background:
          "var(--primary--gradient, linear-gradient(180deg, #3454BE 0%, #0C0C0C 100%))",
        minHeight: "100vh",
      }}
    >
      <LastLift />
      <WeightSlider />
      <LiftTracker />
    </main>
  );
}
