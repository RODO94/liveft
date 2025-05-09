import { BarDatum } from "@nivo/bar";
import { LiftRecord } from "../../../../types/lifts";
import dayjs from "dayjs";

export const responsiveBarData = (liftData: LiftRecord[]): BarDatum[] => {
  const liftsByMonth = liftData.map((lift) => {
    return {
      month: dayjs(lift.date, "YYYY/MM/DD").format("MMM"),
      weight: lift.weight,
      liftName: lift.liftSlug,
    };
  });

  let groupByMonth: Record<string, { [key: string]: number }> = {};

  liftsByMonth.forEach((lift) => {
    if (!groupByMonth) {
      groupByMonth = {
        [lift.month]: {
          [lift.liftName]: lift.weight,
        },
      };
      return;
    }

    if (!groupByMonth[lift.month]) {
      groupByMonth[lift.month] = {
        [lift.liftName]: lift.weight,
      };
      return;
    }

    if (!groupByMonth[lift.month].liftName) {
      groupByMonth[lift.month] = {
        ...groupByMonth[lift.month],
        [lift.liftName]: lift.weight,
      };
      return;
    }

    if (groupByMonth[lift.month][lift.liftName] < lift.weight) {
      groupByMonth[lift.month][lift.liftName] = lift.weight;
      return;
    }
  });

  const barData: BarDatum[] = Object.entries(groupByMonth).map(
    ([key, value]) => {
      return { month: key, ...value };
    }
  );
  return barData;
};
