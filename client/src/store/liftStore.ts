import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { LiftRecord } from "../types/lifts";
import { getUserLiftRecords } from "../requests/liftRecords";

interface LiftState {
  usersLifts: LiftRecord[];
  recordsForOneLift: LiftRecord[];
  fetchUsersLifts: () => Promise<void>;
  fetchRecordsForOneLift: (liftId: string) => Promise<void>;
  refreshStore: (liftId: string) => Promise<void>;
}

export const useLiftStore = create<LiftState>()(
  persist(
    (set, get) => ({
      usersLifts: [],
      recordsForOneLift: [],

      fetchUsersLifts: async () => {
        try {
          const userId = window.sessionStorage.getItem("userId");
          if (userId) {
            const response = await getUserLiftRecords(userId);
            if (response.success) {
              set({ usersLifts: response.data });
            }
          }
        } catch (error) {
          console.error("Error fetching lifts:", error);
        }
      },
      fetchRecordsForOneLift: async (liftId: string) => {
        const liftRecords = get().usersLifts;
        const recordsForOneLift = liftRecords.filter(
          (record) => record.liftId === liftId
        );
        set({ recordsForOneLift });
      },
      refreshStore: async (liftId: string) => {
        const { fetchUsersLifts, fetchRecordsForOneLift } = get();
        await fetchUsersLifts();
        await fetchRecordsForOneLift(liftId);
      },
    }),
    {
      name: "lift-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        usersLifts: state.usersLifts,
      }),
    }
  )
);
