import { useEffect, useState } from "react";
import LastLift from "./components/LastLift";
import LiftTracker from "./components/LiftTracker";
import WeightSlider from "./components/WeightSlider";
import { useParams } from "@tanstack/react-router";
import { liftRecordsTable } from "../../data/staticLiftData";
import { LiftRecord } from "../../types/lifts";

export default function Lifts() {
  /**
   * Within this component we need a record of lifts
   * We need a weight calculator based off max weight
   * We need a lift counter and target tracker
   */

  const [liftRecords, setLiftRecords] = useState<LiftRecord[] | null>(null);

  const { liftId } = useParams({ strict: false });
  const userId = window.sessionStorage.getItem("user");

  useEffect(() => {
    const liftsByUserAndLift = liftRecordsTable.filter(
      (lift) => lift.id === liftId && lift.userId === userId
    );
    setLiftRecords(liftsByUserAndLift);

    return () => {
      setLiftRecords(null);
    };
  }, [liftId, userId]);

  console.log(liftRecords);
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
