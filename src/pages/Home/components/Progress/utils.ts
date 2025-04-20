import { BarDatum } from "@nivo/bar";
import { LiftRecord } from "../../../../types/lifts";
import dayjs from "dayjs";
import { getLiftName } from "../../../../data/staticLiftData";

export const monthsOfYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const responsiveBarData = (liftData: LiftRecord[]): BarDatum[] => {
  /**
   * We need this to return an array
   * The array needs to be a collection of objects
   * Each object will represent a month
   * Each month in the object will have a key value pair
   * the key being the lift name
   * the value being the weight lifted in that month
   * Each lift should also get a colour attached to it
   */
  const liftsByMonth = liftData.map((lift) => {
    return {
      month: dayjs(lift.date, "YYYY/MM/DD").format("MMM"),
      weight: lift.weight,
      liftName: getLiftName(lift.liftId).slug,
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
